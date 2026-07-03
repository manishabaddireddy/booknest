const express = require('express');
const router  = express.Router();
const {
  userSignup, userLogin,
  getAllBooks, placeOrder, getMyOrders
} = require('../controllers/UsersController');

router.post('/signup', userSignup);
router.post('/login',  userLogin);
router.get('/books',   getAllBooks);
router.post('/order',  placeOrder);
router.get('/orders/:userId', getMyOrders);

module.exports = router;