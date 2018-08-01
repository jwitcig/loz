var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/express", { useNewUrlParser: true });
mongoose.Promise = Promise;

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

var itemSchema = new mongoose.Schema({
  name: String,
  color: String
});

var Item = mongoose.model('Item', itemSchema);

router.get('/', function(req, res, next) {
  Item.aggregate([
    {$group:
      {
        _id: "$color",
        color: {$sum: 1},
      }
    },
    {$project:
      {
        name: "$_id",
        color: "$color",
      }
    }
  ]).then(results => {
    res.send(results);
  });
});

router.post('/', function(req, res) {
  Item.create({name: req.body.name.toUpperCase(), color: req.body.color})
      .then(item => {
        res.send(item);
      })
      .catch(console.error);
});

router.get('/delete', function(req, res) {
  Item.remove({})
        .then(res.send.bind(res))
        .catch(err => { console.error(err); });
});

module.exports = router;
