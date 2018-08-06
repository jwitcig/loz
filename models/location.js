var mongoose = require('mongoose');

module.exports = mongoose.model('Location', new mongoose.Schema({
  name: String,
  description: String,
  // loc: { type: String, coordinates: [Number] },
  creator: {
    user: { firstName: String, lastName: String },
    accountId: String,
  }
}), 'locations');
