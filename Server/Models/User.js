const mongoose = require("mongoose");

const Userschema = mongoose.Schema({
  Name: {
    type: String,
    require: true,
  },
  email: {  
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  role:{
    type:Number,
    default:0
}
});
const User = mongoose.model("user", Userschema);

module.exports = User;
