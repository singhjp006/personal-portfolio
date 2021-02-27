let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect out to Book Model
let Book = require('../models/book')

// get route for book list page -- read operation
router.get('/', (req, res, next) => {
    Book.find((err, BookList) => {
        if(err) {
            return console.error(err);
        } else {
            console.log(BookList);
            res.render('book', {title: 'Book List', BookList: BookList});
        }
    });
});

module.exports = router;
