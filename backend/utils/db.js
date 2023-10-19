const mongoose = require('mongoose');
const express = require('express');

const app = express();

const connectDB = async () => {
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || 27017;
    const database = process.env.DB_DATABASE;

    const uri = `mongodb://${host}:${port}/${database}`;

    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to MongoDB');
        // app.listen(3000, () => {
        //     console.log('Server is running on port 3000');
        // });
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });
};

module.exports = connectDB;