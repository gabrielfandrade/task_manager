const express = require('express');
const taskController = require('../controllers/taskController');
const validateToken = require('../middlewares/validateToken');
const validateTask = require('../middlewares/validateTask');

const router = express.Router();

router.get('/title/:title', taskController.getTaskByTitle);
router.get('/status/:status', taskController.getTaskByStatus);
router.get('/', taskController.getAllTasks);
router.get('/:id', taskController.getTaskById);

router.post('/', validateTask, taskController.createTask);

router.put('/:id', validateToken, taskController.updateTask);

router.delete('/:id', validateToken, taskController.deleteTask);

module.exports = router;