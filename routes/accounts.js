var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');

var Account = require('../models/account');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.put('/', function(req, res) {
  Account.create({
    user: req.body.user,
    username: req.body.username,
    password: req.body.password,
  }).then(account => {
    res.send(account._id);
  }).catch(console.error);
});

router.get('/:id', function(req, res, next) {
  Account.findById(req.params.id).then(account => {
    res.send(account);
  }).catch(console.log);
});

router.post('/login', function(req, res, next) {
  Account.findOne({username: req.body.username}).then(account => {
    if (account.password.encrypted == req.body.password) {
      console.log('Logged in: ' + req.body.username);

      req.session.userId = account._id;
      res.send(account._id);
      return;
    }
    res.send("Nope");
  }).catch(console.log);
});

router.post('/logout', function(req, res, next) {
  Account.findOne({username: req.body.username}).then(account => {
    req.session.userId = null;
    res.send("Success");
  }).catch(console.log);
});

module.exports = router;
