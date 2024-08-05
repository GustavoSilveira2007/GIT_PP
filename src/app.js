const express = require('express');

const dotenv = require('dotenv').config();

const taskRouter = require('./routes/taskRouter');
const prograRouter = require('./routes/prograRouter');
const pendenciasRouter = require('./routes/pendenciasRouter');
const mapaRouter = require('./routes/mapaRouter');
const cors = require ('cors');
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(cors());

app.use('/api', taskRouter);
app.use('/api', prograRouter);
app.use('/api', pendenciasRouter);
app.use('/api', mapaRouter)
module.exports = app;
