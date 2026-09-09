
module.exports=(req,res,next)=>{
    if(!req.user){
        res.status(401).json({
            sucess:false,
            message:"authendication required"

        })
    }
    if(req.user.role!=="admin"){
        res.status(403).json({
            success:false,
            message:"access denied"
        })
        return 
   
    }
     next()
}
