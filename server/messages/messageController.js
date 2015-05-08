'use strict';
// built-in npm module dependencies
//var Promise = require('bluebird');
//var Promise = require('mpromise');
var _ = require('underscore');

// local dependencies
var Message = require('./messageModel.js');

module.exports = {
  addMessage: function (request, response) {
  // logic to add or update Message after server receives POST request
    var messageObject = {
      userId: request.body.userId,
      contactId: request.body.contactId,
      text: request.body.text,
      date: new Date(),
      status: 'scheduled'
    };
    console.log(messageObject);
    // see: http://mongoosejs.com/docs/models.html
    var newMessage = new Message(messageObject);
    newMessage.save(function (error, doc) {
      if (error) {
        response.status(500).send('Error: Could not save message');
      } else {
        response.status(200).send(doc);
      }
    });
  },

  updateMessage: function (request, response) {
    //update message in database after receiving message status
    for (var status in request.body) {
      var messagesArray = request.body[status];
      _.each(messagesArray, function (messageId) {
        var query = { _id: messageId };
        console.log('query', query);
        Message.findOneAndUpdate(query, { status: status }, function (error) {
          if (error) {
            console.log(error);
          } else {
            console.log('updated');
          }
        });
      });
    }
    response.status(200).send('Messages updated');
  },
  
  showMessages: function (request, response) {
  // return all Messages after server receives GET request
    
    Message.find({ userId: 1 }, function (error, docs) {
      if (error) {
        response.status(500).send('Error: Could not send docs');
      } else {
        var populateQuery = [{path: 'contactId', model: 'Contact'}, {path: 'contactPhone', model: 'Contact'}];
        response.status(200).send(docs);
        // Message.populate(docs, populateQuery, function (error, newDocs) {
        //   console.log(newDocs);
        //   response.status(200).send(newDocs);
        // });
      }
    });
  }
};

// Message.findOne({ _id: newMessage._id })
// .populate('userId').populate('contactId');

