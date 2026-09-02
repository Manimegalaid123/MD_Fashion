const mongoose=require('mongoose')
const dotenv=require('dotenv')
async function connectDb(){
try{
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("mongodb connected successfully")
}catch(e){
    console.log("the mongoodb not connect")
    console.log(e.stack)
}
}
module.exports=connectDb