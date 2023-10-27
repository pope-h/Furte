const User = require('../models/user');
const jwt = require('jsonwebtoken');

const handleRefreshToken = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;

    const foundUser = await User.findOne({ refreshToken }).exec();
    if (!foundUser) return res.sendStatus(403); //Forbidden 
    // evaluate jwt 
    jwt.verify(
        refreshToken,
        process.env.REFRESH_KEY,
        (err, decoded) => {
            if (err || foundUser.email !== decoded.email) return res.sendStatus(403);
            const role = foundUser.role;
            const accessToken = jwt.sign(
                {
                    "UserInfo": {
                        "userName": decoded.userName,
                        "email": decoded.email,
                        "role": role
                    }
                },
                process.env.ACCESS_KEY,
                { expiresIn: '10m' }
            );
            res.json({ role, accessToken });
        }
    );
}

module.exports = { handleRefreshToken }