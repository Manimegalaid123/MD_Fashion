const User=require('../models/User.js')
async function getProfile(req,res){
    const user=await User.findById(req.user.userId)
 res.json({
        User:user,
    })
}
module.exports=getProfile