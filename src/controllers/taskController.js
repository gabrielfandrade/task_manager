const taskService = require('../services/taskService');

const insert = async (request, response) => {
    const { title, description } = request.body;

    const task = await taskService.insert({ title, description, status: 'pendente' });

    if (task) {
        return response.status(201).json(task);
    }

    return response.status(422).json({ message: 'Erro ao cadastrar uma tarefa' });
}

module.exports = {
    insert,
}