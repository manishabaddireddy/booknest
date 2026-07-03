const User  = require('../models/Users/UserSchema');
const Order = require('../models/Users/MyOrders');
const Book  = require('../models/Seller/BookSchema');
const bcrypt = require('bcryptjs');
const jwt    = require('jsonwebtoken');

// User Signup
exports.userSignup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: 'User already exists' });
    const hashed = await bcrypt.hash(password, 10);
    const user   = await User.create({ name, email, password: hashed });
    res.status(201).json({ message: 'User created', user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// User Login
exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: 'Invalid credentials' });
    const token = jwt.sign({ id: user._id, role: 'user' }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ message: 'Login successful', token, user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all books (for browsing)
exports.getAllBooks = async (req, res) => {
  try {
    const { genre, author, title } = req.query;
    const filter = {};
    if (genre)  filter.genre  = new RegExp(genre, 'i');
    if (author) filter.author = new RegExp(author, 'i');
    if (title)  filter.title  = new RegExp(title, 'i');
    const books = await Book.find(filter);
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Place order
exports.placeOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json({ message: 'Order placed', order });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get user's orders
exports.getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};