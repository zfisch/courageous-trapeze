var Agenda = require('agenda');
var mongoose = require('mongoose');
// Promise.promisifyAll(mongoose);
// var Message = require('./messageModel.js');
// var User = require('../users/userModel.js');
// var Contact = require('../contacts/contactModel.js');
// var twilio = require('../config/twilio.js');
// 
var User = mongoose.model('User');
var Message = mongoose.model('Message');
var Contact = mongoose.model('Contact');

var agenda = new Agenda({db: { address: 'localhost:27017/courageoustrapezedb'}});

agenda.define('send message', function(job, done) {
  var data = job.attrs.data;
  console.log(data);
  var contactPhone = null;
  var userPhone = null;

  Contact.findById(data.contactId, function(err, data){
    contactPhone = data['phone'];
    User.findById(data.userId, function(err, data){
      userPhone = data['phone'];
      console.log(contactPhone, userPhone);
    });
  });

  //TODO: send message through twilio
  // twilio.sendMessage({
  //   to: Contact.get(phone),
  //   from: '+14153196800',
  //   body: data.text
  // }, function(err, responseData){
  //   if(err){
  //     twilio.sendMessage({
  //       to: User.get(phone),
  //       from: '+14153196800',
  //       body: 'Your message failed to send :('
  //     });
  //   }
  // });


  done();
});


module.exports = agenda;