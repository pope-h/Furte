const Product = require("../models/product");

/**
 * Get all products that match the search query.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - The products that match the search query.
 */
const getAllProducts = async (req, res) => {
  try {
    const searchQuery = req.query.search || "";
    const products = await Product.find({ $or: [
        { name: { $regex: searchQuery, $options: 'i' } },
        { description: { $regex: searchQuery, $options: 'i' } }
      ] });
    if (!products) return res.status(204).json({ msg: "No products found." });
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
};

/**
 * Create a new product.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - The success message.
 */
const createNewProduct = async (req, res) => {
  if (
    !req?.body?.name ||
    !req?.body?.description ||
    !req?.body?.category ||
    !req?.body?.price ||
    !req?.body?.quantity
  ) {
    return res.status(400).json({ msg: "Please fill all necessary inputs" });
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
      createdAt: Date.now(),
    });
    res.status(201).json({ msg: "Product created successfully." });
    // res.json(result);
    console.log(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
};

/**
 * Update a product.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - The success message.
 */
const updateProduct = async (req, res) => {
  if (!req?.body?.id) {
    return res.status(400).json({ msg: "ID parameter is required." });
  }

  try {
    const product = await Product.findOne({ _id: req.body.id }).exec();
    if (!product) {
      return res
        .status(204)
        .json({ msg: `No product matches ID ${req.body.id}.` });
    }
    if (req.body?.name) product.name = req.body.name;
    if (req.body?.description) product.description = req.body.description;
    if (req.body?.category) product.category = req.body.category;
    if (req.body?.price) product.price = req.body.price;
    if (req.body?.quantity) product.quantity = req.body.quantity;
    if (req.body?.imageUrl) product.imageUrl = req.body.imageUrl;
    const result = await product.save();
    // res.json(result);
    res.status(201).json({ msg: "Product updated successfully." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
};

/**
 * Delete a product.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - The result of the deletion operation.
 */
const deleteProduct = async (req, res) => {
  if (!req?.body?.id)
    return res.status(400).json({ msg: "Product ID required." });
  // console.log(req.body.id);

  const product = await Product.findOne({ _id: req.body.id }).exec();
  if (!product) {
    return res
      .status(204)
      .json({ msg: `No product matches ID ${req.body.id}.` });
  }
  const result = await product.deleteOne();
  res.json(result);
};

/**
 * Get a product by ID.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - The product that matches the ID.
 */
const getProduct = async (req, res) => {
  if (!req?.params?.id)
    return res.status(400).json({ msg: "Product ID required." });

  const product = await Product.findOne({ _id: req.params.id }).exec();
  if (!product) {
    return res
      .status(204)
      .json({ msg: `No product matches ID ${req.params.id}.` });
  }
  res.json(product);
};

module.exports = {
  getAllProducts,
  createNewProduct,
  updateProduct,
  deleteProduct,
  getProduct,
};
