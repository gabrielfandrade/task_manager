const userService = require('../services/userService');

const login = async (request, response) => {
    const { email, password } = request.body;

    const token = await userService.login({ email, password });

    if (token.message)
        return response.status(400).json(token);

    return response.status(200).json(token);
}

module.exports = {
    login,
}