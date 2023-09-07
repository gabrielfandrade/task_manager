const express = require('express');
const taskController = require('../controllers/taskController');

const router = express.Router();

router.get('/', taskController.getAll);
router.get('/:id', taskController.getById);
router.post('/', taskController.create);

module.exports = router;