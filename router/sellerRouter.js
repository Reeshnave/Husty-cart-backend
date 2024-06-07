const express= require('express')
const {Signup,Signin}=require('../Controller/seller/sellercontroller')
const authenticateSeller= require('../middleware/seller-middlewares')
const sellerRouter= express.Router();

sellerRouter.post("/signup",Signup)
sellerRouter.post("/signin",authenticateSeller,Signin)

module.exports=sellerRouter;