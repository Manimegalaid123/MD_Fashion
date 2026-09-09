const express=require('express')
const app=express()
const dotenv=require('dotenv')
const cors = require('cors');
const cookieparser=require('cookie-parser')
dotenv.config()
app.use(cookieparser())
app.use('/uploads', express.static('uploads'));
app.use(cors({origin:"http://localhost:5173",credentials:true}))
const connectDb=require('./config/db.js')
app.use(express.json())

const userRoutes=require('./routers/userRouter.js')
connectDb()
const ProductRoutes=require('./routers/ProductRoutes.js')
const authRoutes=require('./routers/authRoutes');
const cartRoutes=require('./routers/cartRoutes.js')
const authMiddleware=require('./middleware/authMiddleware')
app.use('/api/user',userRoutes)
app.use('/api/auth',authRoutes)
app.use('/api/products',ProductRoutes)
app.use('/api/cart',authMiddleware,cartRoutes)
app.listen(process.env.PORT,()=>{
console.log(`server running on port${process.env.PORT}`)
})
