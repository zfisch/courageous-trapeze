var mongoose = require('mongoose');
// userSchema may not be a dependency here, only in messageController
// var userSchema = require('./users/userModel.js');


var messageSchema = new mongoose.Schema({
  // Reference user collection for id
  // see: http://docs.mongodb.org/manual/reference/database-references/
  // see: http://mongoosejs.com/docs/guide.html#_id

  userId: {
    //type: String,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
    //required: true
  },
  contactId: {
    //type: String,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Contact'
  },
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  status: {
    type: String
  }
});

// save new mongoose model to module.exports for use in other files
// see: http://mongoosejs.com/docs/models.html
module.exports = mongoose.model('Message', messageSchema);