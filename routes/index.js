// File name: index.js
// Created By: Jashan Preet Singh
// Student ID: 301170664
// Created On: 13 February, 2021

var express = require('express');
var router = express.Router();

/* Express Routes */

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET about me page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact-me', { title: 'Contact Me' });
});


module.exports = router;
