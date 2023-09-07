const taskModel = require('../models/taskModel');

const create = async (name) => {
    const insertId = await taskModel.create(name);

    return insertId;
}

const getAll = async () => {
    const tasks = await taskModel.getAll();

    return tasks;
}

module.exports = {
    create,
    getAll,
}