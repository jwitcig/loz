var mongoose = require('mongoose');

module.exports = mongoose.model('Account', new mongoose.Schema({
  user: { firstName: String, lastName: String },
  username: String,
  password: {
    encrypted: String,
    salt: String,
  }
}), 'accounts');
