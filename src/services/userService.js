const userModel = require('../models/userModel');
const { generateToken } = require('../utils/JWT');

const login = async (user) => {
    const login = await userModel.login(user);

    if (!login)
        return { message: 'Usuario não encontrado'}

    const token = await generateToken(login);

    return token;
}

module.exports = {
    login,
}