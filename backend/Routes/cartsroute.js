
const cartroutes=require('express').Router()
const authmiddle = require('../Middleware/authmiddle');
const { addtocart } = require('../Controller/Cartcontroller');

cartroutes.post('/',authmiddle,addtocart)
module.exports=cartroutes;