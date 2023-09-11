const express = require('express');
const taskRouter = require('./routers/taskRouter');
const userRouter = require('./routers/userRouter');

const app = express();

app.use(express.json());

app.use('/task', taskRouter);
app.use('/login', userRouter);

module.exports = app;