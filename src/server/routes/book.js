var express = require('express');
var router = express.Router();
var booksController = require('../controllers/books.js');

/* GET ALL BOOKS */
router.get('/', booksController.getAll);
  
/* GET SINGLE BOOK BY ID */
router.get('/:id', booksController.getBookById);
  
/* SAVE BOOK */
router.post('/', booksController.saveBook);
  
/* UPDATE BOOK */
router.put('/:id', booksController.updateBook);

/* DELETE BOOK */
router.delete('/:id', booksController.deleteBook);

module.exports = router;
