
const express=require('express')
const router=express.Router()
const {addtoCart, getCart,removeCart,removeQuantity}=require('../controllers/cartController')
router.post('/addtocart/:pid',addtoCart)
router.get('/',getCart)
router.delete('/remove/:id',removeCart)
router.patch('/removeQuantity/:id',removeQuantity)
module.exports=router;
