/**
 * Handles the refresh token request and generates a new access token.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - The response containing the role and access token.
 */
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const logger = require('../utils/logger');

const handleRefreshToken = async (req, res) => {
    console.log("refresh token request received");
    console.log("cookies request", req);
    const cookies = req.cookies;
    const cookie = req.cookie;
    console.log("cookie", cookie);
    console.log("cookies", cookies);
    logger.info("cookies fetched", cookies);
    if (!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;
    console.log("jwt", refreshToken);
    logger.info("jwt", refreshToken);

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
            console.log("new access token generated", accessToken);
        }
    );
}

module.exports = { handleRefreshToken }