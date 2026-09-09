const mongoose=require('mongoose')
const User=new mongoose.Schema({
    name:{
        required:true,
        type:String,

    },
    email:{
        required:true,
           type:String,
    },
    phone:{
         type:String,
        required:true,
        minLength:10,
        maxLength:10,
          
    },
    password:{
        minLength:8,
        required:true,
           type:String,

    },
    role:{
        required:true,
           type:String,
           enum:["user","admin"],
           default:"user"
    }
})
module.exports=mongoose.model('User',User)