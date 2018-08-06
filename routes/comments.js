var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');

var mongoose = require('../lib/mongoose');
var Account = require('../models/account');
var Comment = require('../models/comment');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.put('/', function(req, res) {
  console.log(req.session.userId);
  Account.findById(req.session.userId).then(account => {
    console.log("comment data: " + JSON.stringify(req.body));
    console.log("account data: " + JSON.stringify(account));
    return Comment.create({
      body: req.body.body,
      owner: req.body.owner,
      creator: {
        firstName: account.user.firstName,
        lastName: account.user.lastName,
        accountId: account._id,
      },
    });
  }).then(document => {
    console.log("comment data: " + JSON.stringify(document));
    res.send(document._id);
  }).catch(error => console.log(error));
});

router.get('/:id', function(req, res, next) {
  Comment.findById(req.params.id)
    .then(results => res.send(results))
    .catch(console.log);
});

router.get('/', function(req, res, next) {
  console.log(JSON.stringify(req.query));
  Comment.find({owner: { id: req.query.ownerId, modelType: req.query.ownerType }})
    .then(results => res.send(results))
    .catch(console.log);
});

module.exports = router;
