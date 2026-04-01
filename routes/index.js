const express = require('express');
const router = express.Router();

// Import route files
const collection1Routes = require('./collection1Routes');
const collection2Routes = require('./collection2Routes');
const authRoutes = require('./authRoutes');

// Use route files
router.use('/collection1', collection1Routes);
router.use('/collection2', collection2Routes);
router.use('/auth', authRoutes);

module.exports = router;