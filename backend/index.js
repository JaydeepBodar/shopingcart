const express = require("express");
const product=require('./products')
const app = express();
const dotenv=require('dotenv')
const cors=require('cors')
const mongoose = require("mongoose");
dotenv.config()
mongoose.set('strictQuery', false)
const userloginroutes=require("./Routes/userRoutes")
app.use(express.json())
app.use(cors('*'))
app.use('/user',userloginroutes)
app.get('/products',(req,res)=>{
  res.json(product)
})
app.get('/products/:id',async (req,res)=>{
  try{
    // let newproducts=Object.entries(product)
    // console.log('efeeffe',newproducts)
    // console.log('dvdvsrrg',typeof newproducts)
    const newid=Number(req.params?.id);
    console.log('hhdh',newid)
    const individuleproduct=product.products?.find((val)=>val.id === newid)
    console.log(individuleproduct)
    res.json(individuleproduct)
  }catch(err){
    res.json({message:'failed to fetch data'})
  }
})
app.listen(4100, function check(err) {
  if (err) {
    console.log("error");
  } else {
    console.log("started your server on port 4100");
  }
});
mongoose.connect(process.env.database,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function check(err) {
    if (err) {
        console.log("error to connect database");
    } else {
        console.log("database connection succesfully");
    }
  }
);
