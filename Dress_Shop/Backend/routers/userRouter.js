const express=require('express')
const router=express.Router()
const auth=require('../middleware/authMiddleware')
const User = require('../models/User')
router.get('/profile',auth,async(req,res)=>{
    const user=await User.findById(req.user.userId)
    res.json(
        {   User:user,
            username:user.name,
          
        } ,
    )
})
module.exports=router