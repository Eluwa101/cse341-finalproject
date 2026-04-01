const express = require('express');
const router = express.Router();
const controller = require('../controllers/collection2Controller');

// Routes for Collection 2
router.get('/', controller.getAllCollection2);

module.exports = router;