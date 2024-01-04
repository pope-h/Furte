const express = require('express');
const productsController = require('../../controllers/productsController');
const verifyRoles = require('../../middlewares/verifyRoles');

const router = express.Router();

/**
 * Route for getting all products.
 * @route GET /api/products
 * @group Products
 * @returns {Array} Array of products
 */
router.route('/')
    .get(productsController.getAllProducts)
    /**
     * Route for creating a new product.
     * @route POST /api/products
     * @group Products
     * @param {string} role - The role of the user creating the product (e.g., "Admin")
     * @returns {Object} The created product
     */
    .post(verifyRoles("Admin"), productsController.createNewProduct)
    /**
     * Route for updating a product.
     * @route PUT /api/products
     * @group Products
     * @param {string} role - The role of the user updating the product (e.g., "Admin")
     * @returns {Object} The updated product
     */
    .put(verifyRoles("Admin"), productsController.updateProduct)
    /**
     * Route for deleting a product.
     * @route DELETE /api/products
     * @group Products
     * @param {string} role - The role of the user deleting the product (e.g., "Admin")
     * @returns {string} Success message
     */
    .delete(verifyRoles("Admin"), productsController.deleteProduct);

/**
 * Route for getting a specific product by ID.
 * @route GET /api/products/{id}
 * @group Products
 * @param {string} id.path.required - The ID of the product
 * @returns {Object} The product with the specified ID
 */
router.route('/:id')
    .get(productsController.getProduct);

module.exports = router;