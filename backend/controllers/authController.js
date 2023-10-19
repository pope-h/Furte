const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const createJwtToken = (user) => {
    // Define the payload
    const payload = {
        user: {
            id: user.id,
            userName: user.userName,
            email: user.email,
        },
    };

    // Sign the JWT token using secret key
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: '1hr',
    });

    return token;
};

exports.signin = async (req, res) => {
    // Extract data from request body
    const { email, password } = req.body;

    try {
        // Check if user exists
        let user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ msg: 'User does not exist' });
        }

        // Verify the password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid Password' });
        }

        // Create and return a JWT token
        const token = createJwtToken(user);

        res.json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.signup = async (req, res) => {
    // Extract user data from request body
    const { userName, email, password } = req.body;

    try {
        // check if user exists
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // create a new user
        user = new User({
            userName,
            email,
            password: hashedPassword,
        });

        // Save user to db
        await user.save();

        res.json({ msg: 'User registered successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};