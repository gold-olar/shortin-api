const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const LinksSchema = new Schema({
  username:{
    type: String,
    required: true
},
  longLink:{
      type: String,
      required: true
  },
  shortLink:{
    // required :true,
    type: String
  },  
  date:{
      type: Date,
      default: Date.now
  }

});


const LinkModel = mongoose.model('links', LinksSchema);
module.exports = LinkModel;


