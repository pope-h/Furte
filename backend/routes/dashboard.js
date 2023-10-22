const express = require('express');
const dashboardController = require('../controllers/dashboardController');
const ROLES_LIST = require('../config/roles_list');
const verifyRoles = require('../middlewares/verifyRoles');

const router = express.Router();

// Below is a sample of authorizing users based on roles
// Same can be done for the post, put, delete routes
router.get('/dashboard', verifyRoles(ROLES_LIST.Admin), dashboardController.dashboard);

module.exports = router;