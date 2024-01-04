const express = require('express');
const authController = require('../controllers/authController');

/**
 * Express router for handling authentication routes.
 * @type {import('express').Router}
 */
const router = express.Router();

/**
 * Route for user sign in.
 * @name POST /signin
 * @function
 * @memberof module:routes/auth
 * @inner
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {NextFunction} next - Express next middleware function
 */
router.post('/signin', authController.signin);

/**
 * Route for user sign up.
 * @name POST /signup
 * @function
 * @memberof module:routes/auth
 * @inner
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {NextFunction} next - Express next middleware function
 */
router.post('/signup', authController.signup);

module.exports = router;