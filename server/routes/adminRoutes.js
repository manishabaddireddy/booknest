const express = require('express');
const router  = express.Router();

const {
  adminSignup,
  adminLogin,
  getAllSellers,
  getAllUsers,
  getAllBooks,
  deleteSeller,
  deleteUser,
  deleteBook
} = require('../controllers/AdminControllers');

router.post('/signup',       adminSignup);
router.post('/login',        adminLogin);
router.get('/sellers',       getAllSellers);
router.get('/users',         getAllUsers);
router.get('/books',         getAllBooks);
router.delete('/seller/:id', deleteSeller);
router.delete('/user/:id',   deleteUser);
router.delete('/book/:id',   deleteBook);

module.exports = router;