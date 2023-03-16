const jwt=require('jsonwebtoken')
const authmiddle=(req,res,next)=>{
    try{
        const decode=jwt.verify(req.headers.authorization,process.env.secretkey)
        req.user=decode;
        next()
    }catch(err){
        console.log('unauthorized')
    }
}
module.exports=authmiddle