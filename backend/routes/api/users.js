const express = require('express');
const usersController = require('../../controllers/usersController');
// const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middlewares/verifyRoles');

const router = express.Router();

router.route('/')
    .get(verifyRoles("Admin"), usersController.getAllUsers)
    .delete(verifyRoles("Admin"), usersController.deleteUser);

router.route('/:id')
    .get(verifyRoles("Admin"), usersController.getUser);

module.exports = router;