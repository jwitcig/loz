var mongoose = require('mongoose');

module.exports = mongoose.model('Comment', new mongoose.Schema({
  owner: String,
  body: String,
  post: {_id: String, type: String},
}), 'comments');
