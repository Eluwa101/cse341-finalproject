const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController');
const auth = require("../middleware/authMiddleware");
// Create user
router.post(
  '/',
  /*
    #swagger.tags = ['Users']
    #swagger.summary = 'Create a user'
    #swagger.parameters['body'] = {
      in: 'body',
      required: true,
      schema: {
        name: 'Iruoghene',
        email: 'Iruoghene@example.com',
        role: 'customer',
        oauthId: '123456'
      }
    }
  */
  controller.createUser
);

// Get all users
router.get(
  '/',
  /* #swagger.tags = ['Users']
     #swagger.summary = 'Get all users'
  */
  controller.getUsers
);

// Get user by ID
router.get(
  '/:id',
  /* #swagger.tags = ['Users']
     #swagger.summary = 'Get user by ID'
  */
  controller.getUserById
);

// Update user
router.put(
  '/:id', auth,
  /*
    #swagger.tags = ['Users']
    #swagger.summary = 'Update a user'
    #swagger.parameters['body'] = {
      in: 'body',
      required: true,
      schema: {
        name: 'Updated Name',
        email: 'updated@example.com',
        role: 'admin'
      }
    }
  */
  controller.updateUser
);

// Delete user
router.delete(
  '/:id', auth,
  /* #swagger.tags = ['Users']
     #swagger.summary = 'Delete a user'
  */
  controller.deleteUser
);

module.exports = router;