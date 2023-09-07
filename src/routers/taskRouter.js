const express = require('express');
const taskController = require('../controllers/taskController');

const router = express.Router();

router.get('/title/:title', taskController.getTaskByTitle);
router.get('/status/:status', taskController.getTaskByStatus);
router.get('/', taskController.getAllTasks);
router.get('/:id', taskController.getTaskById);

router.post('/', taskController.createTask);

router.put('/:id', taskController.updateTask);

router.delete('/:id', taskController.deleteTask);

module.exports = router;