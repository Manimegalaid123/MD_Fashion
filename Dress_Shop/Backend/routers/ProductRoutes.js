const express=require('express')
const router=express.Router()
const {addProduct,getProduct,getProductById,deleteProduct,updateProduct}=require('../controllers/ProductControllers.js')
const adminMiddleware = require('../middleware/adminMiddleware.js')
const authMiddleware=require('../middleware/authMiddleware.js')
const upload=require('../middleware/uploadMiddleware.js')
router.post('/addProduct',authMiddleware,adminMiddleware,upload.single("image"), addProduct)

router.get('/',getProduct)
router.get('/:id',getProductById)
router.delete('/deleteProduct/:id',authMiddleware,adminMiddleware,deleteProduct)
router.put('/updateProduct/:id',authMiddleware,adminMiddleware,updateProduct)
module.exports=router