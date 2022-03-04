const express = require('express');

const apiRoutes = require('./apiRoutes');
const htmlRoutes = require('./htmlRoutes'); 

const app = express();

app.use('/html',htmlRoutes);
app.use('/api', apiRoutes);

module.exports = app;