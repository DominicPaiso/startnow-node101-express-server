// create your express server below
var express = require('express');
var app = express();
var data = require('./data.json');

app.get('/', function(req, res) {
   res.status(200).send('');
});

app.get('/data', function(req, res) {
    res.json(data);
});

// finally export the express application
module.exports = app;
