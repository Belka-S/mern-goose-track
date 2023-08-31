const jwt = require('jsonwebtoken');

const User = require('../../models/user');
const { ctrlWrapper } = require('../../decorators');
const { HttpError, sendEmail, createMsg } = require('../../utils');

const { ACCESS_SECRET_KEY, NODE_ENV, FRONT_URL_DEV, FRONT_URL_PROD } = process.env;
const frontUrl = NODE_ENV === 'development' ? FRONT_URL_DEV : FRONT_URL_PROD;

const forgotPassword = ctrlWrapper(async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) throw HttpError(422);

  const payload = { id: user._id };
  const secret = ACCESS_SECRET_KEY + user.password;
  const pwdToken = jwt.sign(payload, secret, { expiresIn: '5h' });

  const link = `${frontUrl}/reset?id=${user._id}&pwd_token=${pwdToken}`;
  const msg = createMsg.forgotPassword(email, link);
  await sendEmail.nodemailer(msg);

  res.status(200).json({ message: `Email to ${user.email} sent.` });
});

module.exports = forgotPassword;
