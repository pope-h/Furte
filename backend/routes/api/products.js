const express = require('express');
const productsController = require('../../controllers/productsController');
// const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middlewares/verifyRoles');

const router = express.Router();

router.route('/')
    .get(productsController.getAllProducts)
    .post(verifyRoles("Admin"), productsController.createNewProduct)
    .put(verifyRoles("Admin"), productsController.updateProduct)
    .delete(verifyRoles("Admin"), productsController.deleteProduct);

router.route('/:id')
    .get(productsController.getProduct);

module.exports = router;