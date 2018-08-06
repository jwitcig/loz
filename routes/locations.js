var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');

var Account = require('../models/account');
var Location = require('../models/location');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', function(req, res, next) {
  Location.aggregate([
    {$project:
      {
        id: "$_id",
        name: "$name",
        description: "$description",
        location: "$location",
      }
    }
  ]).then(results => {
    res.send(results);
  }).catch(console.log);
});

router.put('/', function(req, res) {
  Account.findById(req.session.userId).then(account => {
    return Location.create({
      name: req.body.name,
      description: req.body.description,
      creator: {
        user: {firstName: account.user.firstName, lastName: account.user.lastName},
        accountId: account._id,
      }
    });
  }).then(item => res.send(item._id))
    .catch(console.error);
});

router.delete('/delete', function(req, res) {
  Location.remove({})
    .then(res.send.bind(res))
    .catch(console.error);
});

router.get('/:id', function(req, res, next) {
  Location.findById(req.params.id)
    .then(results => res.send(results))
    .catch(console.log);
});

module.exports = router;
