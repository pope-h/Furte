/**
 * Logout Router
 * @module routes/logout
 */

const express = require('express');
const router = express.Router();
const logoutController = require('../controllers/logoutController');

/**
 * Handle logout request
 * @name GET/logout
 * @function
 * @memberof module:routes/logout
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {void}
 */
router.get('/', logoutController.handleLogout);

module.exports = router;