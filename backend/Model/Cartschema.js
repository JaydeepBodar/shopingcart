const mongoose=require('mongoose')
const cartSchema=new mongoose.Schema({
    user:{ type: mongoose.Schema.Types.ObjectId,ref:'usersignups',require:true},
    cartItems:[{
        product:{ type:mongoose.Schema.Types.ObjectId,ref:'product',require:true},
        quantity:{ type:Number,require:true,default:1},
        price:{type:Number,require:true}
    }]
})
module.exports=mongoose.model('carts',cartSchema)