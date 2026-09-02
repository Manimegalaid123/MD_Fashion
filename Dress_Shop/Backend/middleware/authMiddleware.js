const jwt=require('jsonwebtoken')
module.exports=(req,res,next)=>{
    const token=req.headers.authorization?.split(' ')[1];
    try{
    if(!token){
        return res.status(400).json({
            success:false,
            message:"no token"
        });
    }
        
            const verifytoken=jwt.verify(token,process.env.JWT);
            req.user=verifytoken
              return res.json("token verify")
        }catch(e){
              return res.status(401).json("invalid token ")
        }
    }
