const express=require('express')
const router=express.Router()
const{getMyOrder,createOrder}=require('../controllers/OrderController')
router.get('/myorder',getMyOrder)
router.post('/createOrder',createOrder)
module.exports=router
