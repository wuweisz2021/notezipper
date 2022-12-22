const jwt = require('jsonwebtoken');

//id-30 days expiration
const generateToken = (id) => {
    return jwt.sign({ id }, "wuwei", { expiresIn: '30d' });
};

module.exports = generateToken;
