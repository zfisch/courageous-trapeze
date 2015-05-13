var Agenda = require('agenda');
var Message = require('./messageModel.js')

var agenda = new Agenda({db: { address: 'localhost:27017/courageoustrapezedb'}});

agenda.define('send message', function(job, done) {
  var data = job.attrs.data;
  console.log("+++++++++++DOING THE THING+++++++++++");
  console.log(data);
  //TODO: make sure this function works as Twillio needs
  // emailClient.send({
  //   to: data.contactId,
  //   from: data.userId,
  //   message: data.text,
  // }, done);
  done();
});


module.exports = agenda;