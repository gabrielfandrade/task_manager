const express = require('express');
const taskController = require('../controllers/taskController');

const router = express.Router();

router.get('/', taskController.getAll);
router.post('/', taskController.create);

module.exports = router;