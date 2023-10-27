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

const allowedOrigins = ['http://localhost:3000'];
app.use(cors({ origin: allowedOrigins, allowedHeaders: ['*'] }));
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Welcome to Forte Application Programming Interface');
});
// app.use('/api/v1/auth', authRoute);
app.use(authRoute);
app.use(refreshRoute);
app.use('/logout', require('./routes/logout')); // Another way of handling

app.use(verifyJWT);
app.use(dashboardRoute);
app.use('/products', require('./routes/api/products'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});