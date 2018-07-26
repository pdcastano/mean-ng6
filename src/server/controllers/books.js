var bookModel = require('../models/book.js');

exports.getAll = function(req, res, next) {
    bookModel.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
}

exports.getBookById = function(req, res, next) {
    bookModel.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
}

exports.saveBook = function(req, res, next) {
    bookModel.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
}

exports.updateBook = function(req, res, next) {
    bookModel.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
}

exports.deleteBook = function(req, res, next) {
    bookModel.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
}