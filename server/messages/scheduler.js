var Agenda = require('agenda');
var Message = require('./messageModel.js')

var agenda = new Agenda({db: { address: 'localhost:27017/courageoustrapezedb'}});

agenda.define('send message', function(job, done) {
  //TODO: send post to Twillio
  var data = job.attrs.data;
  console.log(data);
  done();
});


module.exports = agenda;