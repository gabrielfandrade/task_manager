const jwt = require('jsonwebtoken');

const TOKEN_SECRET_KEY = process.env.JWT_SECRET || 'secret';

const generateToken = (login) => {
    const payload = {
        id: login.id,
        mail: login.email,
    };

    const token = jwt.sign(payload, TOKEN_SECRET_KEY, { algorithm: 'HS256' });

    return token;
}

const authenticateToken = (token) => {
    if (!token)
        return { message: 'Token não encontrado' };

    try {
        const validate = jwt.verify(token, TOKEN_SECRET_KEY)
        return validate;
    } catch (error) {
        return { message: 'Token expirado ou invalido' };
    }
}

module.exports = {
    generateToken,
    authenticateToken,
};