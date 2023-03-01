const newroute=require('express').Router()
const userroutes=require('../Controller/userController')
newroute.post('/signup',userroutes.signup);
newroute.post('/login',userroutes.login)
module.exports=newroute;