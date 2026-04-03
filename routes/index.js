const express = require('express');
const router = express.Router();

// Import route files
const usersRoutes = require('./usersRoutes');
const productsRoutes = require('./productsRoutes');
const authRoutes = require('./authRoutes');

// Use route files
router.use('/users', usersRoutes);
router.use('/products', productsRoutes);
router.use('/auth', authRoutes);

module.exports = router;