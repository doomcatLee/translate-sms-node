var client = require('twilio')(
    'ACca9625d5004aecd333d236abdf521852',
    'c4e7a3fb6a522a073e18423a04ac181c'
);

exports.sendSMS = function() {
    client.messages.create({
        from: '19713402317',
        to: '15039983176',
        body: "You just sent an SMS from Node.js using Twilio!"
    }, function(err, message) {
        if(err) {
            console.error(err.message);
        }
    });
    return null;
}

