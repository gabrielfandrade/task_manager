const express = require('express');
const userController = require('../controllers/userController');
const validateLogin = require('../middlewares/validateLogin');

const router = express.Router();

router.post('/', validateLogin, userController.login);

module.exports = router;