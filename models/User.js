const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  username:{
      type: String,
      required: true
  },
  email:{
      type: String,
      required: true
  },
  password:{
    type: String,
    required:true
  },
  links:{
    type: Number,
    default: 0
  },
  date:{
      type: Date,
      default: Date.now
  }

});


const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;


