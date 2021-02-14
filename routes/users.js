// File name: users.js
// Created By: Jashan Preet Singh
// Created On: 13 February, 2021

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
