const Product = require('../models/product');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
    if (!products) return res.status(204).json({ 'msg': 'No products found.' });
    res.json(products);
    } catch(err) {
        console.error(err);
        res.status(500).json({ 'msg': 'Server Error' });
    }
    
};

const createNewProduct = async (req, res) => {
    if (!req?.body?.name || !req?.body?.description || !req?.body?.category || !req?.body?.price || !req?.body?.quantity) {
        return res.status(400).json({ 'msg': 'Please fill all necessary inputs' });
    }

    try {
        const result = await Product.create({
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price,
            quantity: req.body.quantity,
            imageUrl: req.body.imageUrl,
            ratings: [],
            reviews: [],
            createdAt: Date.now()
        });
        res.status(201).json({ 'msg': 'Product created successfully.' });
        // res.json(result);
        console.log(result);
    } catch(err) {
        console.error(err);
        res.status(500).json({ 'msg': 'Server Error' });
    }
};

const updateProduct = async (req, res) => {
    if (!req?.body?.id) {
        return res.status(400).json({ 'msg': 'ID parameter is required.' });
    }

    try {
        const product = await Product.findOne({ _id: req.body.id }).exec();
        if (!product) {
            return res.status(204).json({ 'msg': `No product matches ID ${req.body.id}.` });
        }
        if (req.body?.name) product.name = req.body.name;
        if (req.body?.description) product.description = req.body.description;
        if (req.body?.category) product.category = req.body.category;
        if (req.body?.price) product.price = req.body.price;
        if (req.body?.quantity) product.quantity = req.body.quantity;
        if (req.body?.imageUrl) product.imageUrl = req.body.imageUrl;
        const result = await product.save();
        // res.json(result);
        res.status(201).json({ 'msg': 'Product updated successfully.' })
    } catch(err) {
        console.error(err);
        res.status(500).json({ 'msg': 'Server Error' });
    }
};

const deleteProduct = async (req, res) => {
    if (!req?.body?.id) return res.status(400).json({ 'msg': 'Product ID required.' });

    const product = await Product.findOne({ _id: req.body.id }).exec();
    if (!product) {
        return res.status(204).json({ 'msg': `No product matches ID ${req.body.id}.` });
    }
    const result = await product.deleteOne();
    res.json(result);
};

const getProduct = async (req, res) => {
    if (!req?.params?.id) return res.status(400).json({ 'msg': 'Product ID required.' });

    const product = await Product.findOne({ _id: req.params.id }).exec();
    if (!product) {
        return res.status(204).json({ 'msg': `No product matches ID ${req.params.id}.` });
    }
    res.json(product);
};

module.exports = {
    getAllProducts,
    createNewProduct,
    updateProduct,
    deleteProduct,
    getProduct
}