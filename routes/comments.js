var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var mongoose = require('../lib/mongoose');

var User = require('../models/comment');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', function(req, res, next) {

});

module.exports = router;
