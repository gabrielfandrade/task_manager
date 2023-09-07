const express = require('express');
const taskController = require('../controllers/taskController');

const router = express.Router();

router.get('/title/:title', taskController.getByTitle);
router.get('/status/:status', taskController.getByStatus);
router.get('/', taskController.getAll);
router.get('/:id', taskController.getById);

router.post('/', taskController.create);

router.put('/:id', taskController.update);

module.exports = router;