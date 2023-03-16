const Cartsschema=require('../Model/Cartschema')
const addtocart=(req,res)=>{
    const addcart=new Cartsschema({
        user:req.user._id,
        cartItems:req.body.cartItems
    })
    addcart.save((err,cart)=>{
        if(err) res.status(400).json({message:'unable to add item'})
        else{
            res.json({cart})
        }

    })
}
module.exports={addtocart}
