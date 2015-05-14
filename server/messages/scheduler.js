var Agenda = require('agenda');
var mongoose = require('mongoose');
// var twilio = require('../config/twilio.js');
var User = mongoose.model('User');
var Message = mongoose.model('Message');
var Contact = mongoose.model('Contact');

var agenda = new Agenda({db: { address: 'localhost:27017/courageoustrapezedb'}});

agenda.define('send message', function(job, done) {
  var data = job.attrs.data;
  console.log(data);
  var contactPhone = null;
  var userPhone = null;
  
  //get contact and user phone numbers from DB for twilio
  Contact.findById(data.contactId, function(err, data){
    contactPhone = data['phone'];
    User.findById(data.userId, function(err, data){
      userPhone = data['phone'];
      console.log(contactPhone, userPhone);
      //TODO: send message through twilio
      // twilio.sendMessage({
      //   to: contactPhone,
      //   from: '+14153196800',
      //   body: data.text
      // }, function(err, responseData){
      //   if(err){
      //     twilio.sendMessage({
      //       to: userPhone,
      //       from: '+14153196800',
      //       body: 'Your message failed to send :('
      //     });
      //   }
      // });
    });
  });



  done();
});


module.exports = agenda;