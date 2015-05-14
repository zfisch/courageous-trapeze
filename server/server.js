'use strict';

var express = require('express');
var mongoose = require('mongoose');
var middleware = require('./config/middleware.js');
var client = require('../twilio.js');

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

/*******************************
Twillio Route
********************************/

//Testing sending out SMS through Twilio
// app.post('/messageOUT',
//   function(req, res, next){  
//     client.sendMessage({

//       to:'+16502242246', // Any number Twilio can deliver to
//       from: '+14153196800', // A number you bought from Twilio and can use for outbound communication
//       body: 'Testing message from Twillio.' // body of the SMS message

//     }, function(err, responseData) { //this function is executed when a response is received from Twilio
//          if(err){
//            res.send(400, "Wrong Number"); 
//          } else {
//            res.send(responseData);
//          }
//     });
//   }
// );

app.post('/messageIN',
  function(req, res, next){ 
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

/*******************************
Testing Twillio
*************************


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