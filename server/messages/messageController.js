'use strict';
// built-in npm module dependencies
var Promise = require('bluebird');

// local dependencies
var Message = require('./messageModel.js');

module.exports = {
  addMessage: function (request, response) {
  // // logic to add or update Message after server receives POST request
  //   // convert phone number to number
  //   var messageObject = {
  //     userId: request.body.user,
  //     // may have to convert the contactId to an ObjectId to display the relationship
  //     // see: mongoosejs.com/docs/populate.html
  //     contactId: request.body.contactId,
  //     contactPhone: request.body.phone,
  //     text: request.body.message,
  //     date: request.body.date,
  //     status: 'scheduled'
  //   };
  //   var newMessage = new Message(messageObject);
  //   newMessage.save(function (error) {
  //     if (error) { console.log(error); }
  //   });
  },

  updateMessage: function (request, response) {
    // var sentMessagesArray = request.body.sent;
    // for (var i = 0; i < sentMessagesArray.length; i++) {
    //   var query = { id: sentMessagesArray[i] };
    //   Message.findOneAndUpdate(query, { status: 'sent' }, function (data) {
        
    //   });
    // }
  },
  
  showMessages: function (request, response) {
  // logic to return all Messages after server receives GET request
  }
};


// var query = { name: 'borne' };
// Model.findOneAndUpdate(query, { name: 'jason borne' }, options, callback)
