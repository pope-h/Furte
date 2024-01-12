/**
 * Middleware function to verify user roles.
 * @param {...string} allowedRoles - The allowed roles for accessing the route.
 * @returns {Function} - The middleware function.
 */
const verifyRoles = (...allowedRoles) => {
    return (req, res, next) => {
        //  //console.log('Allowed Role:', allowedRoles);
        //  //console.log('User Role:', req.role);
        if (!req?.role) return res.sendStatus(401);
        const rolesArray = allowedRoles;
        //  //console.log(rolesArray);
        //  //console.log(req.role);
        const result = rolesArray.includes(req.role);
        if (!result) return res.sendStatus(401);
        next();
    }
}

module.exports = verifyRoles;