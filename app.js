var port = process.env.PORT || 3000;

var express = require('express');
var http = require('http');

var path = require('path');
var bodyParser = require('body-parser');
var sms = require('./public/js/sms.js');

var rp = require('request-promise');

var translate = require('node-google-translate-skidz');

var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static(path.join(__dirname, 'public')));

var gcloud = require('google-cloud')({
    projectId: 'liquid-terra-167122',
    // Specify a path to a keyfile.
    keyFilename: '/Users/doomcat/downloads/doki_oauth.json'
});

var gtranslate = gcloud.translate();

app.get('/', function(req, res) {
    console.log('index');
});


app.post('/sendSMS', function(req, res) {
    var to = req.param('To');
    var body = req.param('Body');

    translate({
        text: body,
        source: 'es',
        target: 'ar'
    }, function(result) {
        console.log(result);
        sms.sendSMS(to, result.toString());
    });


});



app.listen(port);