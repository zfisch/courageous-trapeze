// Twilio Credentials 
var accountSid = 'ACac0d6af5ad2234e941a0e76f2df365d6'; 
var authToken = '550e5de193bdfd3591026bae8bdeb547'; 


//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken);
client.mobileNumber = '+16502242246';
client.twillioNumber = '+14153196800';
//Expoet the twillio module
module.exports = client;