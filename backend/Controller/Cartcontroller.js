const Cartsschema=require('../Model/Cartschema')
const addtocart=(req,res)=>{
    Cartsschema.findOne({user:req.user.id}).exec((err,cart)=>{
        if(err) res.json({message:'ubable to add item'})
        if(cart){
            const product=req.body.cartItems.product
            const item=cart.cartItems.find(pro=>pro.product === product)
            if(item){
                Cartsschema.findOneAndUpdate({'user':req.user.id,"cartItems.product":product},{
                    "$set":{
                        "cartItems":{
                            ...req.body.cartItems,
                            quantity:item.quantity+req.body.cartItems.quantity,
                            price:item.price+req.body.cartItems.price
                        }
                    }
                }).exec((err,_cart)=>{
                    if(err) res.json({message:'unauthorized'})
                    else{
                        req.json({cart:_cart})
                    }
                })
            }
        }
    })
    const addcart=new Cartsschema({
        user:req.user.id,
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
