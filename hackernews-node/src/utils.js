const jwt = require('jsonwebtoken');

const APP_SECRET = 'SDABW$31244XXZXC32s432#$7j][12$^97643fcb';

function getUserId(context) {
  const Authorization = context.request.get('Authorization');
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const { userId } = jwt.verify(token, APP_SECRET);
    return userId
  }
  throw new Error('Not authenticated');
}

module.exports = {
  APP_SECRET,
  getUserId
}