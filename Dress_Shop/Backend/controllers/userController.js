const User=require('../models/User.js')
async function getProfile(req,res){
    try{

    const user=await User.findById(req.user.userId)
 if(!user){
     res.status(404).json({
    success:false,
        message:"user Not found"

    })
 }
 res.status(200).json({
    success:true,
        User:user,

    })
}catch(e){
    return res.status(500).json({
        succes:false,
        message:e.message||"server error"
    })
}
}
module.exports=getProfile