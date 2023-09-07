const { authenticateToken } = require('../utils/JWT');

const validateToken = async (request, response, next) => {
    const { authorization } = request.headers;

    const validate = await authenticateToken(authorization);

    if (validate.message)
        return response.status(401).json(validate)

    request.locals = validate;

    return next();
}

module.exports = validateToken;