const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

function generateJwt(username) {
  return jwt.sign({username}, process.env.TOKEN_SECRET, { expiresIn: '30d' });
}

function generateAccessToken(token) {
  
}

module.exports = generateJwt;