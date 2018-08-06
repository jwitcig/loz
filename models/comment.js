var mongoose = require('mongoose');

module.exports = mongoose.model('Comment', new mongoose.Schema({
  body: String,
  owner: { id: String, modelType: String },
  creator: {
    firstName: String,
    lastName: String,
    accountId: String,
  },
}), 'comments');
