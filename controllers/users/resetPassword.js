const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/user');
const { ctrlWrapper } = require('../../decorators');
const { HttpError } = require('../../utils');

const { ACCESS_SECRET_KEY } = process.env;

const resetPassword = ctrlWrapper(async (req, res) => {
  const { id: _id, token: pwdToken } = req.params;
  const { newPassword, confirmPassword } = req.body;

  const user = await User.findOne({ _id });
  if (!user) throw HttpError(422);

  const secret = ACCESS_SECRET_KEY + user.password;
  try {
    const { id } = jwt.verify(pwdToken, secret);
  } catch (error) {
    throw HttpError(403);
  }

  if (newPassword !== confirmPassword) throw HttpError(400);

  const hashPassword = await bcrypt.hash(newPassword, 10);
  const newUser = await User.findByIdAndUpdate(_id, { password: hashPassword });
  if (!newUser) throw HttpError(422);

  res.status(200).json({ message: 'Password reset.' });
});

module.exports = resetPassword;
