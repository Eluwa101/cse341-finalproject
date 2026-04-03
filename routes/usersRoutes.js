const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');

// Add a user
router.post('/', userController.createUser);
/* #swagger.tags = ['Users']
   #swagger.summary = 'Add a user'
*/

// Get all users
router.get('/', userController.getUsers);
/* #swagger.tags = ['Users']
   #swagger.summary = 'Get all users'
*/

// Get user by ID
router.get('/:id', userController.getUserById);
/* #swagger.tags = ['Users']
   #swagger.summary = 'Get user by ID'
*/


// Update user
router.put('/:id', userController.updateUser);
/* #swagger.tags = ['Users']
   #swagger.summary = 'Update a user'
   #swagger.parameters['id'] = {
        in: 'path',
        required: true,
        type: 'string',
        description: 'User ID'
   }
   #swagger.requestBody = {
        required: true,
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        name: { type: "string" },
                        email: { type: "string" },
                        role: { type: "string" },
                        oauthId: { type: "string" }
                    }
                }
            }
        }
   }
*/

// Delete user
router.delete('/:id', userController.deleteUser);
/* #swagger.tags = ['Users']
   #swagger.summary = 'Delete a user'
*/

module.exports = router;