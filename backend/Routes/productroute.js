const productroute=require('express').Router()
const Productcontroller=require('../Controller/Productcontroller');
productroute
.get('/',Productcontroller.getallproduct)
.get('/:id',Productcontroller.getindividualproduct)
//   app.get('/products/:id',async (req,res)=>{
//     try{
//       // let newproducts=Object.entries(product)
//       // console.log('efeeffe',newproducts)
//       // console.log('dvdvsrrg',typeof newproducts)
//       const newid=Number(req.params?.id);
//       console.log('hhdh',newid)
//       const individuleproduct=product.products?.find((val)=>val.id === newid)
//       console.log(individuleproduct)
//       res.json(individuleproduct)
//     }catch(err){
//       res.json({message:'failed to fetch data'})
//     }
//   })
module.exports=productroute;