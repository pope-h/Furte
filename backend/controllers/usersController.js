const User = require('../models/user');

/**
 * Get all users
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} - The list of users or an error message
 */
const getAllUsers = async (req, res) => {
    const users = await User.find();
    if (!users) return res.status(204).json({ 'msg': 'No users found' });
    res.json(users);
};

/**
 * Update user role
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} - A success message or an error message
 */
const updateUserRole = async (req, res) => {
    if (!req?.body?.id) return res.status(400).json({ 'msg': 'User ID is required' });
    try {
        const user = await User.findOne({ _id: req.body.id }).exec();
        if (!user) return res.status(204).json({ 'msg': `User ID ${req.body.id} not found` });
        if (req.body?.role) user.role = req.body.role;
        const result = await user.save();
        res.status(201).json({ 'msg': 'User role updated successfully.' });
    } catch(err) {
        console.error(err);
        res.status(500).json({ 'msg': 'Server Error' });
    }
};

/**
 * Update user information
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} - A success message or an error message
 */
const updateUserInfo = async (req, res) => {
    console.log("updateUserInfo", req.body)
    if (!req?.body?.id) return res.status(400).json({ 'msg': 'User ID is required' });
    console.log("ID is valid")
    try {
        console.log("finding user")
        const user = await User.findOne({ _id: req.body.id }).exec();
        console.log("user found", user)
        if (!user) return res.status(204).json({ 'msg': `User ID ${req.body.id} not found` });
        
        if (req.body?.userName) user.userName = req.body.userName;
        if (req.body?.email) user.email = req.body.email;
        if (req.body?.firstName) user.firstName = req.body.firstName;
        if (req.body?.lastName) user.lastName = req.body.lastName;
        if (req.body?.address) user.address = req.body.address;
        if (req.body?.country) user.country = req.body.country;
        if (req.body?.phoneNumber) user.phoneNumber = req.body.phoneNumber;

        console.log("checking if user is admin");
        if (user.role !== "Admin" && req.body?.role)
          return res
            .status(403)
            .json({ msg: "You are not authorized to update user role" });
        if (req.body?.role) user.role = req.body.role;

        console.log("saving user")
        const result = await user.save();
        console.log("user saved")
        res.status(201).json({ 'msg': 'User info updated successfully.' });
    } catch(err) {
        console.error(err);
        res.status(500).json({ msg: "Server Error", error: err.message });
    }
};

/**
 * Delete a user
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} - A success message or an error message
 */
const deleteUser = async (req, res) => {
    if (!req?.body?.id) return res.status(400).json({ 'msg': 'User ID required' });
    const user = await User.findOne({ _id: req.body.id }).exec();
    if (!user) {
        return res.status(204).json({ 'msg': `User ID ${req.body.id} not found` });
    }
    const result = await user.deleteOne({ _id: req.body.id });
    res.json(result);
};

/**
 * Get a user by ID
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} - The user object or an error message
 */
const getUser = async (req, res) => {
    if (!req?.params?.id) return res.status(400).json({ 'msg': 'User ID required' });
    const user = await User.findOne({ _id: req.params.id }).exec();
    if (!user) {
        return res.status(204).json({ 'msg': `User ID ${req.params.id} not found` });
    }
    res.json(user);
};

module.exports = {
    getAllUsers,
    updateUserRole,
    updateUserInfo,
    deleteUser,
    getUser
}