const Seller = require('../models/Seller/SellerSchema');
const Book   = require('../models/Seller/BookSchema');
const Order  = require('../models/Users/MyOrders');
const bcrypt = require('bcryptjs');
const jwt    = require('jsonwebtoken');

// Seller Signup
exports.sellerSignup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const exists = await Seller.findOne({ email });
    if (exists) return res.status(400).json({ message: 'Seller already exists' });
    const hashed = await bcrypt.hash(password, 10);
    const seller = await Seller.create({ name, email, password: hashed });
    res.status(201).json({ message: 'Seller created', seller });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Seller Login
exports.sellerLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const seller = await Seller.findOne({ email });
    if (!seller) return res.status(404).json({ message: 'Seller not found' });
    const match = await bcrypt.compare(password, seller.password);
    if (!match) return res.status(401).json({ message: 'Invalid credentials' });
    const token = jwt.sign({ id: seller._id, role: 'seller' }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ message: 'Login successful', token, seller });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add Book
exports.addBook = async (req, res) => {
  try {
    const { title, author, genre, description, price, sellerId, sellerName } = req.body;
    const itemImage = req.file ? req.file.filename : '';
    const book = await Book.create({ title, author, genre, itemImage, description, price, sellerId, sellerName });
    res.status(201).json({ message: 'Book added', book });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get seller's books
exports.getMyBooks = async (req, res) => {
  try {
    const books = await Book.find({ sellerId: req.params.sellerId });
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update book
exports.updateBook = async (req, res) => {
  try {
    const updated = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: 'Book updated', updated });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete book
exports.deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: 'Book deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get orders for seller
exports.getSellerOrders = async (req, res) => {
  try {
    const orders = await Order.find({ sellerId: req.params.sellerId });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};