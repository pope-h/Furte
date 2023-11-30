const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: String,
    lastName: String,
    address: String,
    country: String,
    phoneNumber: String,
    role: {
        type: String,
        enum: ['Admin', 'User'],
        default: 'User',
    },
    password: {
        type: String,
        required: true,
    },
    refreshToken: String,
    ratings: [{
        rating: Number,
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    }],
    reviews: [{
        title: String,
        content: String,
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;