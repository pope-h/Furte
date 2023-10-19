const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./utils/db');
require("dotenv").config();

const app = express();

const allowedOrigins = ['http://localhost'];
app.use(cors({ origin: allowedOrigins, allowedHeaders: ['*'] }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Forte Application Programming Interface');
});

connectDB();

const authRoute = require('./routes/auth');

app.use('/api/v1/auth', authRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});

// module.exports = app;