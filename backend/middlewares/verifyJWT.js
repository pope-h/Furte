/**
 * Middleware function to verify JSON Web Tokens (JWT).
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {void}
 */
const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401);
    const token = authHeader.split(' ')[1];
    //  //console.log(token)
    jwt.verify(
        token,
        process.env.ACCESS_KEY,
        (err, decoded) => {
            if (err) return res.sendStatus(403); //invalid token
            req.userName = decoded.UserInfo.userName;
            req.email = decoded.UserInfo.email;
            req.role = decoded.UserInfo.role;
            next();
        }
    );
}

module.exports = verifyJWT;