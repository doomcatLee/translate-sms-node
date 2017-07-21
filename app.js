var port = process.env.PORT || 3000;

var express = require('express');

var http = require('http');
var path = require('path');
var sms = require('./public/js/sms.js');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    console.log('index');
});

app.get('/sendSMS', function(req, res) {
    sms.sendSMS();
});


app.listen(port);