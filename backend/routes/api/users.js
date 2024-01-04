/**
 * Express router for handling user-related API routes.
 * @module routes/api/users
 */

const express = require('express');
const usersController = require('../../controllers/usersController');
const verifyRoles = require('../../middlewares/verifyRoles');

const router = express.Router();

/**
 * Route for getting all users.
 * @name GET /api/users
 * @function
 * @memberof module:routes/api/users
 * @param {string} role - The role required to access this route. Only "Admin" can access this route.
 * @param {function} middleware - Middleware function to verify the user's role.
 * @param {function} controller - Controller function to handle the request and response.
 */
router.route('/')
    .get(verifyRoles("Admin"), usersController.getAllUsers)
    .put(usersController.updateUserInfo)
    .delete(verifyRoles("Admin"), usersController.deleteUser);

/**
 * Route for getting a specific user by ID.
 * @name GET /api/users/:id
 * @function
 * @memberof module:routes/api/users
 * @param {function} controller - Controller function to handle the request and response.
 */
router.route('/:id')
    .get(usersController.getUser);

module.exports = router;