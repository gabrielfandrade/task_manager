const connection = require('./connection');

const insert = async (task) => {
    const [{ insertId }] = await connection.execute(
        'INSERT INTO TaskManager.tasks (title, description, status) VALUE (?, ?, ?)',
        [task.title, task.description, task.status],
    );

    return insertId;
}

module.exports = {
    insert,
};