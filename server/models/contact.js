// File name: contact.js
// Created By: Jashan Preet Singh
// Student ID: 301170664
// Created On: 28 February, 2021

let mongoose = require('mongoose');

// create a model class
let contactModel = mongoose.Schema({
    name: String,
    number: Number,
    email: String
},
{
    collection: "contacts"
});

module.exports = mongoose.model('Contact', contactModel);