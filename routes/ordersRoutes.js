const express = require('express');
const router = express.Router();
const controller = require('../controllers/ordersController');

// Create order
router.post(
  '/',
  /* 
    #swagger.tags = ['Orders']
    #swagger.summary = 'Create an order'
    #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              userId: { example: "69cf1d9cd2fc2d5ef09951fc" },
              products: { example: ["69cf34ae754dd9d26ef0bada"] },
              totalPrice: { example: 32000 },
              status: { example: "pending" }
            }
          }
        }
      }
    }
  */
  controller.createOrder
);

// Get all orders
router.get('/', 
/* #swagger.tags = ['Orders']
   #swagger.summary = 'Get all orders'
*/
    controller.getOrders);

// Get order by ID
router.get('/:id', 
/* #swagger.tags = ['Orders']
   #swagger.summary = 'Get order by ID'
*/
    controller.getOrderById);

// Update order
router.put(
  '/:id',
  /*
    #swagger.tags = ['Orders']
    #swagger.summary = 'Update order'
    #swagger.parameters['body'] = {
      in: 'body',
      required: true,
      schema: {
        status: 'completed'
      }
    }
  */
  controller.updateOrder
);

// Delete order
router.delete('/:id', 
/* #swagger.tags = ['Orders']
   #swagger.summary = 'Delete order'
*/
    controller.deleteOrder);

module.exports = router;