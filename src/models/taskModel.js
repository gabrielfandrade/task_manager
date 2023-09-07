const connection = require('./connection');

const createTask = async (task) => {
    const [{ insertId }] = await connection.execute(
        'INSERT INTO TaskManager.tasks (title, description, status) VALUE (?, ?, ?)',
        [task.title, task.description, task.status],
    );

    return insertId;
}

const getAllTasks = async () => {
    const [result] = await connection.execute(
        'SELECT * FROM TaskManager.tasks',
    );

    return result;
}

const getTaskById = async (id) => {
    const [[result]] = await connection.execute(
        'SELECT * FROM TaskManager.tasks WHERE id = ?',
        [id],
    );

    return result;
}

const getTaskByTitle = async (title) => {
    const [result] = await connection.execute(
        'SELECT * FROM TaskManager.tasks WHERE title LIKE ?',
        [`%${title}%`],
    );

    return result;
}

const getTaskByStatus = async (status) => {
    const [result] = await connection.execute(
        'SELECT * FROM TaskManager.tasks WHERE status = ?',
        [status],
    );

    return result;
}

const updateTask = async (id, task) => {
    const [{ affectedRows }] = await connection.execute(
        'UPDATE TaskManager.tasks SET description = ?, status = ? WHERE id = ?',
        [task.description, task.status, id],
    );

    return affectedRows;
}

const deleteTask = async (id) => {
    const [result] = await connection.execute(
        'DELETE FROM TaskManager.tasks WHERE id = ?',
        [id],
    )

    return result;
}

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    getTaskByTitle,
    getTaskByStatus,
    updateTask,
    deleteTask,
};