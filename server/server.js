'use strict';

var express = require('express');
var mongoose = require('mongoose');
var middleware = require('./config/middleware.js');
var client = require('./config/twilio.js');
var contact = require('./contacts/contactController');
var message = require('./messages/messageController');

var app = express();

// preferable to mongoose.createConnection, as we do not need multiple database connections
// see: http://mongoosejs.com/docs/connections.html
var mongoURI = process.env.MONGOLAB_URI || 'mongodb://localhost/schedule';
mongoose.connect(mongoURI);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('database connection open');
   // add Users and Messages functionality 
});

middleware(app, express);

app.post('/messageIN',
  function(req, res, next){ 

    var contact = contact.findContact(req, res);

    req.body.contactId = contact.id;
    req.body.userId = '5556368fd9fc090300e6f6d7';
    req.body.text = req.body.body;
    req.body.date = new Date();

    message.addMessage(req, res);

    var message = req.body.Body;
    var from = req.body.From;
    client.sendMessage({

      to:'+16502242246', // Any number Twilio can deliver to
      from: '+14153196800', // A number you bought from Twilio and can use for outbound communication
      body: "Message From: " + from + "\n" + message
    }, function(err, responseData) { 
         if(err){
           res.send(400, "Wrong Number"); 
         } else {
           res.send(responseData);
         }
    });
  }
);

module.exports = app;

/* Walkthrough of the server

  Express, mongoose, and our server are initialized here
  Next, we inject our server and express into our config/middlware.js file for setup
  Our server is exported for easy testing and started in index.js

  middleware.js requires all express middleware and sets it up
  our authentication is set up there as well
  we also create individual routers for two features: messages and users
  each feature has its own folder with a model, controller, and route file
    the respective file is required in middleware.js and injected with its mini-router
    that route file then requires the respective controller and sets up all the routes
    that controller then requires the respective model and sets up all our endpoints which respond to request
*/    

