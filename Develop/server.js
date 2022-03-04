const express = require('express');
// const bodyParser = require('body-parser');
const fs = require('fs');
const api = require('./routes/apiRoutes');
const html = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', api);
app.use('/', html);
app.use(express.static('public'));



app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT}`));