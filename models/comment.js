var mongoose = require('mongoose');

module.exports = mongoose.model('Comment', new mongoose.Schema({
  body: String,
  post: {_id: String, type: String},
  creator: {
    user: { firstName: String, lastName: String },
    accountId: String,
  }
}), 'comments');
