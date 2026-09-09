const express=require('express')
const router=express.Router()
const auth=require('../middleware/authMiddleware')
const User = require('../models/User')
const getProfile=require('../controllers/userController.js')
router.get('/profile',auth,getProfile)
module.exports=router
   