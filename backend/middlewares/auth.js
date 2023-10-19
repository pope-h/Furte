const jwt = require('jsonwebtoken');
const User = require('../models/user');

module.exports = async function (req, res, next) {
    // Get the token from the request header
    const token = req.header('x-auth-token');

    // check if token is provided
    if (!token) {
        return res.status(401).json({ msg: 'Authorization denied' });
    }

    try {
        //verify token
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        // Fetch the user from the database based on the decoded user ID
        const user = await User.findById(decoded.user.id);

        if (!user) {
            return res.status(401).json({ msg: 'User not found' });
        }

        // Attach the user object to the request for later use
        req.user = user;

        // Continue to the next middleware or route handler
        next();
    } catch (err) {
        res.status(401).json({ json: 'Token is not valid' });
    }
};