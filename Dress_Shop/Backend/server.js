const express=require('express')
const app=express()
const dotenv=require('dotenv')
const cors = require('cors');
dotenv.config()
app.use(cors())
const connectDb=require('./config/db.js')
app.use(express.json())

const userRoutes=require('./routers/userRouter.js')
connectDb()

const authRoutes=require('./routers/authRoutes')
app.use('/api/user',userRoutes)
app.use('/api/auth',authRoutes)
app.listen(process.env.port,()=>{
console.log(`server running on port${process.env.port}`)
})
