/**
 * @fileoverview This is the server file for the Forte Application.
 * It sets up the Express server, connects to the database, and defines the routes.
 * @module server
 */

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoute = require('./routes/auth');
const refreshRoute = require('./routes/refresh');
const dashboardRoute = require('./routes/dashboard');
const verifyJWT = require('./middlewares/verifyJWT');
const cookieParser = require('cookie-parser');
const connectDB = require('./utils/db');
require("dotenv").config();

const app = express();

connectDB();

const allowedOrigins = ["https://furte.vercel.app"];
app.use(
  cors({ origin: allowedOrigins, credentials: true }) //allowedHeaders: ["*"]
);
app.use(express.json());
app.use(cookieParser());

/**
 * Default route that returns a welcome message.
 * @name GET /
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
app.get('/', (req, res) => {
    res.send('Welcome to Forte Application Programming Interface');
});

app.use(authRoute);
app.use(refreshRoute);
app.use('/logout', require('./routes/logout'));

app.use(verifyJWT);
app.use(dashboardRoute);
app.use('/products', require('./routes/api/products'));
app.use('/users', require('./routes/api/users'));

const PORT = process.env.PORT || 3001;
/**
 * Start the server and listen on the specified port.
 * @name app.listen
 * @function
 * @param {number} PORT - The port number to listen on.
 * @param {Function} callback - The function to be called when the server starts listening.
 */
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});