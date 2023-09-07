const { status } = require('express/lib/response');
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

const getByTitle = async (title) => {
    const tasks = await taskModel.getByTitle(title);

    return tasks;
}

const getByStatus = async (status) => {
    const tasks = await taskModel.getByStatus(status);

    return tasks;
}

const update = async (id, task) => {
    const taskFromDB = await taskModel.getById(id);

    if (taskFromDB) {
        const affectedRows = await taskModel.update(id, task);

        if (affectedRows === 1) {
            const updatedTask = await taskModel.getById(id);

            return updatedTask;
        }
    }

    return null;
}

module.exports = {
    create,
    getAll,
    getById,
    getByTitle,
    getByStatus,
    update,
}