const bcrypt = require('bcrypt')
const User = require('../models/User.js')
const jwt=require('jsonwebtoken')
async function signup(req, res) {
    try{
    const { name, email, phone, password, confirmPassword } = req.body;
    if (!name || !email || !phone || !password || !confirmPassword) {
        return res.status(400).json({
        success:false,
        message:"invalid"})
    }

    const isEmail = await User.findOne({ email: email })
    if (isEmail) {
        return res.status(400).json({
        success:false,
        message:"user exist already"});
    }
    if (password !== confirmPassword) {
        return res.status(400).json(
            {
        success:false,
        message:"password doesn't match"})
    }
    const hashedpassword = await bcrypt.hash(password, 10)
    const user =  await User.create({ name, email, phone, password: hashedpassword})
    const userResponse=user.toObject()
    delete userResponse.password;

    return res.status(201).json({
        success:true,
        userResponse,
      
        message:"sucessfully created"})

}catch(e){
    return res.status(500).json({sucess:false
        ,
        message:e.message||"server Error"
    })
}
}
async function login(req, res) {
 try{
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json("Enter the value")
    }
    const isUser = await User.findOne({ email: email })
    if (!isUser) {
        return res.status(400).json({
        success:false,
        message:"please create a account"})
    }
    const isMatch = await bcrypt.compare(password,isUser.password)
    const userResponse=isUser.toObject()
    if (!isMatch) {
        return res.status(400).json({
        success:false,
      
        message:"enter the correct email or password"})
    }
     const token=jwt.sign({
        userId:isUser._id,role:isUser.role
    },process.env.JWT)
    res.cookie("token",token,{
        httpOnly:true,
        secure:false,
        sameSite:"lax"
    })
    return res.status(200).json({  success:true,userResponse,message:"login successfully"})
    
}catch(e){
    return res.status(500).json(
        {
        success:false,
        message:e.message||"server erro"}
    )
}
}
async function logout(req,res){
 try{
    res.clearCookie("token")
    return res.status(200).json({
        success:true,
        message:"logut successfully"
    })
 }
 catch(e){
    return res.status(500).json({
        success:false,
        message:e.message||"server error"
    })
 }
}

module.exports = { signup, login,logout }