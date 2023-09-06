const taskModel = require('../models/taskModel');

const insert = async (name) => {
    const insertId = await taskModel.insert(name);

    return insertId;
}

module.exports = {
    insert,
}