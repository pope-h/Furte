const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    ratings: [{
        rating: Number,
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }],
    reviews: [{
        title: String,
        content: String,
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Enable text search on the 'name' and 'description' fields
productSchema.index({ name: 'text', description: 'text' });

module.exports = mongoose.model('Product', productSchema);