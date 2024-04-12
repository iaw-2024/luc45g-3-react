const path = require("path");
const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors());
var json = require('./data.json');

app.get('/datos', (req, res) => res.send(json));
app.use(express.static('public'));

app.use(express.static(path.resolve(__dirname, "..", "client", "build")));
app.listen(3001, () => console.log('Server ready on port 3001.'));

module.exports = app;