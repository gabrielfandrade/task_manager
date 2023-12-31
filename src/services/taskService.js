const taskModel = require('../models/taskModel');

const createTask = async (name) => {
    const insertId = await taskModel.createTask(name);

    const task = await taskModel.getTaskById(insertId);

    return task;
}

const getAllTasks = async () => {
    const tasks = await taskModel.getAllTasks();

    return tasks;
}

const getTaskById = async (id) => {
    const task = await taskModel.getTaskById(id);

    return task;
}

const getTaskByTitle = async (title) => {
    const tasks = await taskModel.getTaskByTitle(title);

    return tasks;
}

const getTaskByStatus = async (status) => {
    const tasks = await taskModel.getTaskByStatus(status);

    return tasks;
}

const updateTask = async (id, task) => {
    const taskFromDB = await taskModel.getTaskById(id);

    if (taskFromDB) {
        const affectedRows = await taskModel.updateTask(id, task);

        if (affectedRows === 1) {
            const updatedTask = await taskModel.getTaskById(id);

            return updatedTask;
        }
    }

    return;
}

const deleteTask = async (id) => {
    const taskFromDB = await taskModel.getTaskById(id);

    if (taskFromDB) {
        await taskModel.deleteTask(id);

        return { message: 'Tarefa excluida' };
    }

    return;
}

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    getTaskByTitle,
    getTaskByStatus,
    updateTask,
    deleteTask,
}