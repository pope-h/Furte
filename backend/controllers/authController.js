const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// const createJwtToken = (user) => {
//     // Define the payload
//     const payload = {
//         user: {
//             id: user.id,
//             userName: user.userName,
//             email: user.email,
//         },
//     };

//     // Sign the JWT token using secret key
//     const token = jwt.sign(payload, process.env.ACCESS_KEY, {
//         expiresIn: '1hr',
//     });

//     return token;
// };

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
            const roles = Object.values(user.roles).filter(Boolean);
            // create JWTs
            const accessToken = jwt.sign(
                {
                    "UserInfo": {
                        "userName": user.userName,
                        "email": user.email,
                        "roles": roles
                    }
                },
                process.env.ACCESS_KEY,
                { expiresIn: '15m' }
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
            console.log(roles);
    
            // Creates Secure Cookie with refresh token
            res.cookie('jwt', refreshToken, { httpOnly: true, secure: true, sameSite: 'None', maxAge: 3 * 24 * 60 * 60 * 1000 });
    
            // Send authorization roles and access token to user
            res.json({ roles, accessToken });
    
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
    const { userName, email, password } = req.body;

    try {
        // check if user exists
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // create a new user
        user = new User({
            userName,
            email,
            "roles": { "User": 2001 },
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