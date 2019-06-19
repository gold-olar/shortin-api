const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const LinksSchema = new Schema({
  username:{
    type: String,
    required: true
  },
  long:{
      type: String,
      required: true
  },
  short:{
    type: String,
    required: true
  },  
  date:{
      type: Date,
      default: Date.now
  }

});


const LinkModel = mongoose.model('links', LinksSchema);
module.exports = LinkModel;


