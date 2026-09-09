 const mongoose=require('mongoose')
 const User=require('./models/User.js')
 const bcrypt=require('bcrypt')
const env=require('dotenv')
env.config()
async function createAdmin(){
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("admin mongodb connected")
    
    const existadmin=await User.findOne({
        role:"admin"
    })
    if(existadmin){
           console.log("Admin already exists");
            return;
    }

const hasedpassword=await bcrypt.hash(process.env.PASSWORD,10)
    const admin=await User.create({
       name:process.env.NAME, email:process.env.EMAIL,phone:process.env.PHONE,password:hasedpassword,role:"admin"
    })
    console.log("admin created")

}
    catch(e){
        console.log(e)
    }
    finally {
        await mongoose.connection.close();
    }

}
createAdmin()
 
