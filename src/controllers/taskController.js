const taskService = require('../services/taskService');
const Status = require('../utils/Status');

const createTask = async (request, response) => {
    const { title, description } = request.body;

    const task = await taskService.createTask({ title, description, status: 'pendente' });

    if (task)
        return response.status(201).json(task);

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

    if (!Status[status])
        return response.status(404).json({ message: 'Requisição requer um status valido' })

    const tasks = await taskService.getTaskByStatus(Status[status]);

    if (tasks)
        return response.status(200).json(tasks);

    return response.status(404).json({ message: 'Tarefas não encontradas' })
}

const updateTask = async (request, response) => {
    const { id } = request.params;

    const { description, status } = request.body;

    const task = await taskService.updateTask(id, { description, status });

    if (task)
        return response.status(200).json(task);

    return response.status(404).json({ message: 'Tarefa não encontrada' })
}

const deleteTask = async (request, response) => {
    const { id } = request.params;

    const result = await taskService.deleteTask(id);

    if (result)
        return response.status(202).json(result);

    return response.status(404).json({ message: 'Tarefa não encontrada' })
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