const express = require('express');
const router = express.Router();

// Import route files
const usersRoutes = require('./usersRoutes');
const productsRoutes = require('./productsRoutes');
const ordersRoutes = require('./ordersRoutes');
const reviewsRoutes = require('./reviewsRoutes');
const authRoutes = require('./authRoutes');


// Use route files
router.use('/users', usersRoutes);
router.use('/products', productsRoutes);
router.use('/orders', ordersRoutes);
router.use('/reviews', reviewsRoutes);
router.use('/auth', authRoutes);

module.exports = router;