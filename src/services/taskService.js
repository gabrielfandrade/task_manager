const taskModel = require('../models/taskModel');

const create = async (name) => {
    const insertId = await taskModel.create(name);

    const task = await taskModel.getById(insertId);

    return task;
}

const getAll = async () => {
    const tasks = await taskModel.getAll();

    return tasks;
}

const getById = async (id) => {
    const task = await taskModel.getById(id);

    return task;
}

module.exports = {
    create,
    getAll,
    getById,
}