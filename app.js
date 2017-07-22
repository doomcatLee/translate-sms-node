var port = process.env.PORT || 3000;

var express = require('express');

var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');

var sms = require('./public/js/sms.js');

var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    console.log('index');
});

app.post('/sendSMS', function(req, res) {
    var to = req.param('To');
    var body = req.param('Body');
    sms.sendSMS(to, body);
});


app.listen(port);