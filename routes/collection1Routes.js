const express = require('express');
const router = express.Router();
const controller = require('../controllers/collection1Controller');

// Routes for Collection 1
router.get('/',
    // #swagger.tags = ['Collection 1']
    // #swagger.summary = 'Get all items from Collection 1'
    // #swagger.description = 'Endpoint to retrieve all items from Collection 1'
    controller.getAllCollection1
);

module.exports = router;