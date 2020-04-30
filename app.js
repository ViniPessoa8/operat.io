const express = require('express');
const path    = require('path');
const routes  = require('./src/routes');

const PORT = 5000;

const app = express();

app.use('/', routes);

app.use(express.static(path.join(__dirname, 'src')));

app.listen(PORT, () => console.log("Listening to port", PORT));