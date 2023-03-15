const productschema=require('./Model/Productsschema')
const product=require('./products')
const defaultdata=async()=>{
    try{
        await productschema.deleteMany({})
        const data=await productschema.insertMany(product)
        console.log(data)
    }catch(err){
        
    }
}
module.exports=defaultdata;         