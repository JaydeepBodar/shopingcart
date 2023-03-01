const mongoose = require("mongoose");
const schema= mongoose.Schema
const userSignupschema =new schema({
  firstname:{
    require:true,
    type:String
  },
  lastname:{
    require:true,
    type:String
  },
  mobilenumber:{
    require:true,
    type:Number,
  },
  email: {
    require: true,
    type: String,
  },
  token:{
    type:String,
    require:true
  },
  password: { type: String, require: true },
});
module.exports=mongoose.model('usersignups',userSignupschema)