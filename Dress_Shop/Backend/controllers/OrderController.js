 const Order=require('../models/Order')
 const Product=require('../models/Product')
 const Cart=require('../models/Cart')
 async function getMyOrder(req,res){
    try{
   const userId=req.user.userId
   const order=await Order.find({userId}).populate("items.product")
   if(order.length===0){
    return res.status(404).json({
        success:false,
        message:"No Order"
    })
   }
   return res.status(200).json({
    success:true,
    order:order,
    message:"order get successfully"
   })
   
    }catch(e){
        return res.status(500).json({
            success:false,
            message:e.message||"Server error"
        })
    }
}
 
async function  createOrder(req,res){
try{
   const userId=req.user.userId
   const isCart=await Cart.findOne({userId}).populate("items.product")  
      if(!isCart){
    return res.status(404).json({
        success:false,
        message:"cart not found"
    })
}
   const invalidItem = isCart.items.find((item) => !item.product);

if (invalidItem) {
    return res.status(404).json({
        success: false,
        message: "One of the products in your cart no longer exists"
    });
}
    console.log(isCart);
const outofStock=isCart.items.find((item)=>(
          item.quantity>item.product.stock
))
if(outofStock){
    return res.status(400).json({
        success:false,
        message:`${outofStock.product.name} does not have enough stock`
    })
}
const {name,phone,street,city,state,pincode}=req.body
const address={
    name,phone,street,city,state,pincode
}

const OrderItems=isCart.items.map((item)=>(
     {
        product:item.product._id,
        quantity:item.quantity,
        price:item.product.price
     }
))
const totalamount=OrderItems.reduce((total,item)=>(
     total+item.quantity*item.price
),0)

 const order=await Order.create({
    userId,items:OrderItems,totalPrice:totalamount,address 
 })
  for( const item of OrderItems){
    await Product.findOneAndUpdate(item.product,{
        $inc:{
            stock:-item.quantity
        }

    })
  }
await Cart.findOneAndDelete({ userId })
   return res.status(201).json({
    success:true,
    order,
    message:"order created"
   })
  
}catch(e){
      return res.status(500).json({
            success:false,
            message:e.message||"Server error"
        })
}
}

module.exports={getMyOrder,createOrder}