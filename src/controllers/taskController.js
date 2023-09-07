const { request, response } = require('../app');
const taskService = require('../services/taskService');

const create = async (request, response) => {
    const { title, description } = request.body;

    const task = await taskService.create({ title, description, status: 'pendente' });

    if (task) {
        return response.status(201).json(task);
    }

    return response.status(422).json({ message: 'Erro ao cadastrar uma tarefa' });
}

const getAll = async (_request, response) => {
    const tasks = await taskService.getAll();

    if (tasks)
        return response.status(200).json(tasks);

    return response.status(404).json({ message: 'Tarefas não encontradas' })
}

const getById = async (request, response) => {
    const { id } = request.params;

    const task = await taskService.getById(id);

    if (task)
        return response.status(200).json(task);

    return response.status(404).json({ message: 'Tarefa não encontrada' })
}

module.exports = {
    create,
    getAll,
    getById,
}