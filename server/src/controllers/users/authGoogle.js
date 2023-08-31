const jwt = require('jsonwebtoken');

const User = require('../../models/user');
const { HttpError } = require('../../utils');
const { ACCESS_SECRET_KEY, REFRESH_SECRET_KEY, NODE_ENV, FRONT_URL_DEV, FRONT_URL_PROD } =
  process.env;

const frontUrl = NODE_ENV === 'development' ? FRONT_URL_DEV : FRONT_URL_PROD;

const authGoogle = async (req, res) => {
  const { _id: id } = req.user;
  const token = jwt.sign({ id }, ACCESS_SECRET_KEY, { expiresIn: '5h' });
  const refreshToken = jwt.sign({ id }, REFRESH_SECRET_KEY, { expiresIn: '1d' });
  const newUser = await User.findByIdAndUpdate(id, { token, refreshToken });
  if (!newUser) throw HttpError(500, 'Failed to log in.');

  res.redirect(`${frontUrl}/login/google?token=${token}&refreshToken=${refreshToken}`);
};

module.exports = authGoogle;
