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
    role: {
        type: String,
        enum: ['Admin', 'User'],
        default: 'User',
    },
    password: {
        type: String,
        required: true,
    },
    refreshToken: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;