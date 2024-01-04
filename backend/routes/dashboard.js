/**
 * Express router for handling dashboard routes.
 * @module routes/dashboard
 */

const express = require('express');
const dashboardController = require('../controllers/dashboardController');
// const ROLES_LIST = require('../config/roles_list'); THIS LINE MIGHT BE LATER NEEDED
const verifyRoles = require('../middlewares/verifyRoles');
// const verifyJWT = require('../middlewares/verifyJWT');

const router = express.Router();

/**
 * Route for accessing the dashboard.
 * @name GET /dashboard
 * @function
 * @memberof module:routes/dashboard
 * @param {string} role - The role required to access the dashboard (e.g., "Admin").
 * @param {function} middleware - Middleware function to verify the user's role.
 * @param {function} controller - Controller function to handle the dashboard request.
 */
router.get('/dashboard', verifyRoles("Admin"), dashboardController.dashboard);

// Another way of writing the above is 
// router.get('/dashboard',verifyJWT, verifyRoles("Admin"), dashboardController.dashboard);
// However the verifyJWT function has been placed in the server.js file

module.exports = router;