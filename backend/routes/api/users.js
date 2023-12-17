const express = require('express');
const usersController = require('../../controllers/usersController');
// const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middlewares/verifyRoles');

const router = express.Router();

router.route('/')
    .get(verifyRoles("Admin"), usersController.getAllUsers)
    // .put(verifyRoles("User"), usersController.updateUserInfo)
    //I decided to disable the above line so i can control the update from the usersController
    .put(usersController.updateUserInfo)
    .delete(verifyRoles("Admin"), usersController.deleteUser);

router.route('/:id')
    .get(usersController.getUser);

module.exports = router;