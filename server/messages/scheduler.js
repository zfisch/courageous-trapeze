var Agenda = require('agenda');
var mongoose = require('mongoose');
var twilio = require('../config/twilio.js');
var User = mongoose.model('User');
var Contact = mongoose.model('Contact');

var agenda = new Agenda({db: { address: process.env.MONGOLAB_URI || 'localhost:27017/schedule'}});

agenda.define('send message', function(job, done) {
  var data = job.attrs.data;
  var contactPhone = null;
  var userPhone = null;
  var messageBody = data.text;
  

  //get contact and user phone numbers from DB for twilio
  Contact.findById(data.contactId, function(err, data){
    contactPhone = data['phone'];
    User.findById(data.userId, function(err, data){
      userPhone = data['phone'];
      
      //create and send message through twilio
      twilio.messages.create({
        body: messageBody,
        to: contactPhone,
        from: '+14153196800'
      }, function(err, message){
        if(err){
          console.error('Message send error! ', err);
          twilio.sendMessage({
            to: userPhone,
            from: '+14153196800',
            body: 'Your message failed to send :('
          });
        } else {
          console.error('Message send success! ', message);
          process.stdout.write(message.sid);
        }
      });
    });
  });

  done();
});


module.exports = agenda;
