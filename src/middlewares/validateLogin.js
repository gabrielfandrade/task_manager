const validateLogin = (request, response, next) => {
    const { email, password } = request.body;

    if (!email || !password) {
        return response.status(400).json({ message: 'Necessario informa email e senha para Login' });
    }

    return next();
};

module.exports = validateLogin;