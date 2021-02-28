// File name: book.js
// Created By: Jashan Preet Singh
// Student ID: 301170664
// Created On: 28 February, 2021

let mongoose = require('mongoose');

// create a model class
let bookModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: Number
},
{
    collection: 'books'
}
);

module.exports = mongoose.model('Book', bookModel);
