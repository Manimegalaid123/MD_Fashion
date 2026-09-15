const express=require('express')
const router=express.Router()
const auth=require('../middleware/authMiddleware')
const User = require('../models/User')
const getProfile=require('../controllers/userController.js')
const authMiddleware = require('../middleware/authMiddleware')
router.get('/profile',authMiddleware,getProfile)
module.exports=router
   