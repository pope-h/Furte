const User = require('../models/user');

const getAllUsers = async (req, res) => {
    const users = await User.find();
    if (!users) return res.status(204).json({ 'msg': 'No users found' });
    res.json(users);
};

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

const updateUserInfo = async (req, res) => {
    if (!req?.body?.id) return res.status(400).json({ 'msg': 'User ID is required' });
    try {
        const user = await User.findOne({ _id: req.body.id }).exec();
        if (!user) return res.status(204).json({ 'msg': `User ID ${req.body.id} not found` });

        if (req.role !== "Admin" && req.body?.role) return res.status(403).json({ 'msg': 'You are not authorized to update user role' });
        if (req.body?.role) user.role = req.body.role;

        if (req.role !== "User" && req.body?.userName) return res.status(403).json({ 'msg': 'You are not authorized to update user name' });
        if (req.body?.userName) user.userName = req.body.userName; 
        if (req.body?.city) user.city = req.body.city;
        if (req.body?.email) user.email = req.body.email;
        if (req.body?.firstName) user.firstName = req.body.firstName;
        if (req.body?.lastName) user.lastName = req.body.lastName;
        if (req.body?.address) user.address = req.body.address;
        if (req.body?.country) user.country = req.body.country;
        if (req.body?.phoneNumber) user.phoneNumber = req.body.phoneNumber;
        const result = await user.save();
        res.status(201).json({ 'msg': 'User info updated successfully.' });
    } catch(err) {
        console.error(err);
        res.status(500).json({ msg: "Server Error", error: err.message });
    }
};

const deleteUser = async (req, res) => {
    if (!req?.body?.id) return res.status(400).json({ 'msg': 'User ID required' });
    const user = await User.findOne({ _id: req.body.id }).exec();
    if (!user) {
        return res.status(204).json({ 'msg': `User ID ${req.body.id} not found` });
    }
    const result = await user.deleteOne({ _id: req.body.id });
    res.json(result);
};

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