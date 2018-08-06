var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var mongoose = require('../lib/mongoose');

var Comment = require('../models/comment');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.put('/', function(req, res) {
  Comment.create({
    user: req.body.user,
    body: req.body.body,
  }).then(document => {
    res.send(document._id);
  }).catch(console.error);
});


router.get('/:id', function(req, res, next) {
  Comment.findById(req.params.id)
    .then(results => res.send(results))
    .catch(console.log);
});

module.exports = router;
