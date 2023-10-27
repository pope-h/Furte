const express = require('express');
const dashboardController = require('../controllers/dashboardController');
// const ROLES_LIST = require('../config/roles_list'); THIS LINE MIGHT BE LATER NEEDED
const verifyRoles = require('../middlewares/verifyRoles');
// const verifyJWT = require('../middlewares/verifyJWT');

const router = express.Router();

// Below is a sample of authorizing users based on roles
// Same can be done for the post, put, delete routes
router.get('/dashboard', verifyRoles("Admin"), dashboardController.dashboard);

// Another way of writing the above is 
// router.get('/dashboard',verifyJWT, verifyRoles("Admin"), dashboardController.dashboard);
// However the verifyJWT function has been placed in the server.js file

module.exports = router;