const validateTask = (request, response, next) => {
    const { title, description } = request.body;
  
    if (!title || !description) {
        return response.status(400).json({ message: 'Tarefa sem titulo ou descrição' });
    }
  
    return next();
};
  
module.exports = validateTask;