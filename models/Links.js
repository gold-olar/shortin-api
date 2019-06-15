const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const LinksSchema = new Schema({
  longLink:{
      type: String,
      required: true
  },
  shortLink:{
    requiretrue,
    type: String
  },  
  date:{
      type: Date,
      default: Date.now
  }

});


const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;


