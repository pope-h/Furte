/**
 * Express router for handling refresh token requests.
 * @module routes/refresh
 */

const express = require('express');
const router = express.Router();
const refreshTokenController = require('../controllers/refreshTokenController');

/**
 * Route for refreshing a token.
 * @name GET /refresh
 * @function
 * @memberof module:routes/refresh
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} - JSON response containing the refreshed token
 */
router.get('/refresh', refreshTokenController.handleRefreshToken);

module.exports = router;