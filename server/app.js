require('dotenv').config();

const express = require('express');
const path = require('path');
const apiRouter = require('./routes/api');

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRouter);

app.get('*', (req, res) => res.sendFile(path.resolve('public', 'index.html')));

module.exports = app;
