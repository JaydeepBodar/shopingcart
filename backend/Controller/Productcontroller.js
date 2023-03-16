const products=require('../Model/Productsschema')
const getallproduct=async(req,res)=>{
    try{
        const newproduct=await products.find();
        res.json(newproduct)   
    }catch(err){
        res.json({message:'error shown'})
    }

}
const getindividualproduct=async(req,res)=>{
    try{
        const findindividual=await products.findOne({id:req.params.id});
        console.log(findindividual)
        res.status(200).json(findindividual)
    }
    catch(err){
        res.json({message:'error shown'})
    }
}
module.exports={getallproduct,getindividualproduct}