const { request, response } = require('../app');
const taskService = require('../services/taskService');
const Status = require('../utils/Status');

const createTask = async (request, response) => {
    const { title, description } = request.body;

    const token = await taskService.createTask({ title, description, status: 'pendente' });

    if (token)
        return response.status(201).json(token);

    return response.status(422).json({ message: 'Erro ao cadastrar uma tarefa' });
}

const getAllTasks = async (_request, response) => {
    const tasks = await taskService.getAllTasks();

    if (tasks)
        return response.status(200).json(tasks);

    return response.status(404).json({ message: 'Tarefas não encontradas' })
}

const getTaskById = async (request, response) => {
    const { id } = request.params;

    const task = await taskService.getTaskById(id);

    if (task)
        return response.status(200).json(task);

    return response.status(404).json({ message: 'Tarefa não encontrada' })
}

const getTaskByTitle = async (request, response) => {
    const { title } = request.params;

    const tasks = await taskService.getTaskByTitle(title);

    if (tasks)
        return response.status(200).json(tasks);

    return response.status(404).json({ message: 'Tarefas não encontradas' })
}

const getTaskByStatus = async (request, response) => {
    const { status } = request.params;

    const tasks = await taskService.getTaskByStatus(Status[status]);

    if (tasks)
        return response.status(200).json(tasks);

    return response.status(404).json({ message: 'Tarefas não encontradas' })
}

const updateTask = async (request, response) => {
    const { id } = request.params;

    const { title, description, status } = request.body;

    const task = await taskService.updateTask(id, { title, description, status });

    if (task)
        return response.status(200).json(task);

    return response.status(404).json({ message: 'Tarefa não encontrada' })
}

const deleteTask = async (request, response) => {
    const { id } = request.params;

    await taskService.deleteTask(id);

    return response.status(204).send();
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