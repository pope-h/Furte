const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.signin = async (req, res) => {
    // Extract data from request body
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ 'message': 'Email and Password are required.' });

    try {
        // Check if user exists
        let user = await User.findOne({ email }).exec();

        if (!user) {
            return res.sendStatus(401); //Unauthorized 
        }

        // Verify the password
        const match = await bcrypt.compare(password, user.password);
        if (match) {
            // create JWTs
            const accessToken = jwt.sign(
                {
                    "UserInfo": {
                        "userName": user.userName,
                        "email": user.email,
                        "role": user.role
                    }
                },
                process.env.ACCESS_KEY,
                { expiresIn: '10m' }
            );
            const refreshToken = jwt.sign(
                { "email": user.email },
                process.env.REFRESH_KEY,
                { expiresIn: '3d' }
            );
            // Saving refreshToken with current user
            user.refreshToken = refreshToken;
            const result = await user.save();
            console.log(result);
            console.log(user.role);
    
            // Creates Secure Cookie with refresh token
            res.cookie('jwt', refreshToken, { httpOnly: true, secure: true, sameSite: 'None', maxAge: 3 * 24 * 60 * 60 * 1000 });
    
            // Send authorization roles and access token to user
            res.json({ role: user.role, accessToken });
    
        } else {
            res.sendStatus(401);
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.signup = async (req, res) => {
    // Extract user data from request body
    const { userName, email, role, password } = req.body;
    if (!userName || !email || !password) {
        return res.status(400).json({ 'msg': "Please fill out all entries" });
    }

    try {
        // check if user exists
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

         
        // Set default role to "User"
        let selectedRole = role || "User";

        // Verify and set the role
        if (role === "Admin") {
            selectedRole = "Admin";
        } else {
            return res.status(400).json({ msg: "Invalid Selection" });
        }
        

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // create a new user
        user = new User({
            userName,
            email,
            role: selectedRole,
            password: hashedPassword,
        });

        // Save user to db
        await user.save();

        res.status(201).json({ msg: 'User registered successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};