const Status = require('../utils/Status');

const validateUpdate = (request, response, next) => {
    const { description, status } = request.body;
  
    if (!description && !status) {
        return response.status(400).json({ message: 'Tarefa sem descrição e status' });
    } if (!Object.values(Status).includes(status)) {
        return response.status(400).json({ message: 'Necessario status valido' });
    }
  
    return next();
};
  
module.exports = validateUpdate;