const jwt = require('jsonwebtoken');

 const generateToken = (id) =>
  jwt.sign({ id }, 'secret', {
    expiresIn: '30d'
  });
  module.exports=generateToken;

