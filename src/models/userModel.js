const connection = require('./connection')

const login = async (user) => {
    const [[result]] = await connection.execute(
        'SELECT * FROM TaskManager.users WHERE email = ? AND password = ?',
        [user.email, user.password],
    );

    return result;
}

module.exports = {
    login,
}