const connection = require('./connection');

const create = async (task) => {
    const [{ insertId }] = await connection.execute(
        'INSERT INTO TaskManager.tasks (title, description, status) VALUE (?, ?, ?)',
        [task.title, task.description, task.status],
    );

    return insertId;
}

const getAll = async () => {
    const [result] = await connection.execute(
        'SELECT * FROM TaskManager.tasks',
    );

    return result;
}

const getById = async (id) => {
    const [[result]] = await connection.execute(
        'SELECT * FROM TaskManager.tasks WHERE id = ?',
        [id],
    );

    return result;
}

const getByTitle = async (title) => {
    const [result] = await connection.execute(
        'SELECT * FROM TaskManager.tasks WHERE title LIKE ?',
        [`%${title}%`],
    );

    return result;
}

const getByStatus = async (status) => {
    const [result] = await connection.execute(
        'SELECT * FROM TaskManager.tasks WHERE status = ?',
        [status],
    );

    return result;
}

module.exports = {
    create,
    getAll,
    getById,
    getByTitle,
    getByStatus,
};