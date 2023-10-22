const mongoose = require('mongoose');
// const express = require('express');

// const app = express();

const connectDB = async () => {
    // const host = process.env.DB_HOST || 'localhost';
    // const port = process.env.DB_PORT || 27017;
    // const database = process.env.DB_DATABASE;

    // const uri = `mongodb://${host}:${port}/${database}`;

    mongoose.connect(process.env.DATABASE_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });
};

module.exports = connectDB;