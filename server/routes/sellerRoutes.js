const express = require('express');
const router  = express.Router();
const upload  = require('../middlewares/upload');
const {
  sellerSignup, sellerLogin,
  addBook, getMyBooks, updateBook, deleteBook,
  getSellerOrders
} = require('../controllers/SellerControllers');

router.post('/signup', sellerSignup);
router.post('/login',  sellerLogin);
router.post('/addbook', upload.single('itemImage'), addBook);
router.get('/mybooks/:sellerId', getMyBooks);
router.put('/book/:id', updateBook);
router.delete('/book/:id', deleteBook);
router.get('/orders/:sellerId', getSellerOrders);

module.exports = router;