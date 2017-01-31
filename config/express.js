var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    consign = require('consign');

app.use(express.static('./public'));
app.use(bodyParser.json());






consign({cwd: 'app'})
    .include('models')
    .then('controllers')
    .then('routes')
    .into(app)

module.exports = app;
    