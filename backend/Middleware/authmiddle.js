const jwt=require('jsonwebtoken')
const authmiddle=(req,res,next)=>{
    try{
        const decode=jwt.verify(req.headers.authorization,process.env.secretkey)
        req.user=decode;
        next()
    }catch(err){
        res.json({message:"unauthorized user"})
    }
}
module.exports=authmiddle