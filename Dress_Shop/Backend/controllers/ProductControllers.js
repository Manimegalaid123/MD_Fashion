const Product=require('../models/Product.js');
async function addProduct(req,res){
    try{
    const {name,price,description,stock, category}=req.body
    const image =`/uploads/${req.file.filename}`
    if(!name||!price||!description||stock===undefined||!image||!category){
        return res.status(400).json({
            success:false,
            message:"enter the data"
        })
        
    }               
    const isproduct=await Product.findOne({name})
    if(isproduct){
      return res.status(400).json({
            success:false,
            message:"product already exist"
        })
    }


    const product=await Product.create(
        {
            name,price,description,stock,image, category
        }
    )
     return res.status(201).json({
            success:true,
            message:"product created"
        })
    }
    catch(e){
     return res.status(500).json({
            success:false,
            message:e.message ||"server error"
        })
    }
}
async function getProduct(req,res){
    try{
  const product=await Product.find()
  if(product.length==0){
      return res.status(404).json({
                success: false,
                message: "No products found"
            })
  }
  return res.status(200).json({
            success: true,
            product
            ,
            message:"success"
        })
    }
    catch(e){
           return res.status(500).json({
            success:false,
            message:"server error"
        })
    }
}
async function getProductById(req,res){
    try{
            const id=req.params.id
    const product=await Product.findById(id)
    if(!product){
        return res.status(400).json({
            success:false,
            message:"produt Not found"
        })
    }
        return res.status(200).json({
            success:true,
             product
        })
    }catch(e){
         return res.status(500).json({
            success:false,
             message:e.message||"server error"
        })
    }
}
async function deleteProduct(req,res){
  try{
    const id=req.params.id
     const product=await Product.findByIdAndDelete(id)
     console.log(product)
    if(!product){
         return res.status(400).json({
            success:false,
            message:"produt Not found"
        })}
     
         return res.status(200).json({
            success:true,
            message:"product deleted succcess"
        })
    
  }catch(e){
         return res.status(500).json({
            success:false,
             message:e.message||"server error"
        })}
  
}
async function updateProduct(req,res){
try{
    const id=req.params.id
 const {name,price,description,stock,category}=req.body
const updateData={
    name,price,description,stock,category
}
if(req.file){
    updateData.image=`/uploads/${req.file.filename}`
}
    if(!name||!price||!description||stock===undefined||!category){
        return res.status(404).json({
            success:false,
            message:"enter the data"
        })
        
    } 
 const product=await Product.findByIdAndUpdate(id,updateData,{ returnDocument: "after" })
  if(!product){
         return res.status(400).json({
            success:false,
            message:"produt Not found"
        })}
    
         return res.status(200).json({
            success:true,
            message:"product updated success"
        })
}catch(e){
         return res.status(500).json({
            success:false,
             message:e.message||"server error"
        })}
}
module.exports={addProduct,getProduct,deleteProduct,getProductById,updateProduct};