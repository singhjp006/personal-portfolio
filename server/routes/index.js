// File name: index.js
// Created By: Jashan Preet Singh
// Student ID: 301170664
// Created On: 28 February, 2021

var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET about page. */
router.get('/about',  indexController.displayAboutPage);

/* GET products page. */
router.get('/projects',  indexController.displayProjectPage);

/* GET services page. */
router.get('/services',  indexController.displayServicesPage);

module.exports = router;
