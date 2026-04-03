const express = require('express');
const router = express.Router();
const productController = require('../controllers/productsController');

// Create product
router.post('/', productController.createProduct);
/* #swagger.tags = ['Products']
   #swagger.summary = 'Create a product'
*/

// Get all products
router.get('/', productController.getProducts);
/* #swagger.tags = ['Products']
   #swagger.summary = 'Get all products'
*/

// Get product by ID
router.get('/:id', productController.getProductById);
/* #swagger.tags = ['Products']
   #swagger.summary = 'Get product by ID'
*/

// Update product
router.put('/:id', productController.updateProduct);
/* #swagger.tags = ['Products']
   #swagger.summary = 'Update a product'
*/

// Delete product
router.delete('/:id', productController.deleteProduct);
/* #swagger.tags = ['Products']
   #swagger.summary = 'Delete a product'
*/

module.exports = router;