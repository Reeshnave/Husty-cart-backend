const express= require('express')
const {Signup,Signin}=require('../Controller/user/userController')
const authenticateUser=require('../middleware/user-middlewares')

const userRouter= express.Router();

userRouter.post("/signup",Signup)
userRouter.post("/signin",authenticateUser,Signin)

module.exports=userRouter;