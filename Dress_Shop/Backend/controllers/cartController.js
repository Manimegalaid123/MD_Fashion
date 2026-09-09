const Product=require('../models/Product.js')
const Cart=require("../models/Cart.js")
async function addtoCart(req,res){
    try{
      
    const pid=req.params.pid
    const userId=req.user.userId;

    const product=await Product.findById(pid)
    if(!product){
        return res.status(404).json({
            success:false,
            message:"Product Not Found"
        })}
             let isCart=await Cart.findOne({userId})
        if(!isCart){
      isCart= await Cart.create({userId,
            items:[{product:pid,quantity:1}],
        })
    

        return res.status(201).json({
            success:true,
            cart:isCart,
            message:"add to cart succcessfully"
        })
    }
        const existingItems=isCart.items.find((item)=>(
            item.product.toString()===pid
        ))
if(existingItems){
    existingItems.quantity+=1;
}else{
    isCart.items.push({
        product:pid,
        quantity:1
    })
}
await isCart.save()
return res.status(200).json({
    success: true,
    cart: isCart,
    message: "Added to cart successfully"
});
    }
    catch(e){
        return res.status(500).json({
            success:false,
            message:e.message||"server error"
        })
    }
    }
async function getCart(req,res){
    try{
const uid=req.user.userId;
const cart=await Cart.findOne({userId:uid}).populate("items.product")
if(!cart){
    return res.status(200).json({
        cart:{
            items:[]
        },
        message:"Cart is Empty"
    })
}

return res.status(200).json({
    success:true,
    cart,
     message:"this is your cart"
})
    }catch(e){
        
        return res.status(500).json({
            success:false,
            message:e.message||"server error"
        })
    }
    }
 async function removeCart(req,res){
        try{

            const pid=req.params.id
            const userId=req.user.userId
            const userCart=await Cart.findOne({userId})
            if(!userCart){
                return res.status(404).json({
                    success:false,
        
                    message:"cart not found"
                })
            }
            const item=userCart.items.find((item)=>(
                item.product.toString()===pid
            ))
            if(!item){
               return res.status(404).json({
                    success:false,
                    message:"product not found"
                })
            }
            userCart.items=userCart.items.filter((item)=>(
                item.product.toString()!=pid
            ))
            await userCart.save()
            return res.status(200).json({
                success:true,
                message:"item removed from the cart"
            })
        


        }catch(e){
        
        return res.status(500).json({
            success:false,
            message:e.message||"server error"
        })
    }
    }
async function removeQuantity(req,res){
    try{
        const pid=req.params.id
        const userId=req.user.userId;
        const isCart=await Cart.findOne({userId});
        if(!isCart){
            return res.status(404).json({
                success:false,
                message:"cart is empty"
            })
        }
        const existingItem=isCart.items.find((item)=>(
            item.product.toString()===pid
        ))
        if(!existingItem){
            return res.status(404).json({
                success:false,
                message:"product not found"
            })}
            if(existingItem.quantity>1){
                existingItem.quantity-=1
            }
            await isCart.save()
            return res.status(200).json({
                success:true,
                message:"quantity reduced",
                   quantity: existingItem.quantity
            })
    }catch(e)
{
       
        return res.status(500).json({
            success:false,
            message:e.message||"server error"
        })
}    }
module.exports={addtoCart,getCart,removeCart,removeQuantity}