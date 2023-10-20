const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./utils/db');
require("dotenv").config();

const app = express();

const allowedOrigins = ['http://localhost:3000'];
app.use(cors({ origin: allowedOrigins, allowedHeaders: ['*'] }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Forte Application Programming Interface');
});

connectDB();

const authRoute = require('./routes/auth');
const dashboardRoute = require('./routes/dashboard');
// app.use('/api/v1/auth', authRoute);
app.use(authRoute);
app.use(dashboardRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});

// module.exports = app;