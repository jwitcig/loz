var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/express", { useNewUrlParser: true });
mongoose.Promise = Promise;

module.exports = mongoose;
