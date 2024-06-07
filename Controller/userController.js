const User=require('../models/User')
const generateToken= require('../utlis/generateToken')
const bcrypt = require('bcrypt');


const Signup = async (req, res) => {
    try {
      const { email, password, fullname } = req.body
     
   
      const userExist = await User.findOne({ email });
      
      
      if (userExist) {
        return res.send("User is already exist");
      }
      
      const saltRounds = 10;
      const hashpassword = await bcrypt.hash(password, saltRounds);
      
      const newUser = new User({
        email,
        fullname,
        password:hashpassword,
        role:"user"
      });
      
      
      const newUserCreated = await newUser.save();
  
      if (!newUserCreated) {
        return res.send("user is not created");
      }
  
      const token = generateToken(email);
      
      res.cookie("token", token)
      res.send("Signed successfully!");
    } catch (error) {
      console.log(error, "Something wrong");
      res.status(500).send("Internal Server Error");
    }
  };
  
  //SIGNUP
  
   const Signin = async (req, res) => {
    try {
      const { email, password } = req.body;
   
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.send("User not found");
      }
  
      const matchPassword = await bcrypt.compare(password, user.password);
  
      if (!matchPassword) {
        return res.send("Password is not correct");
      }
  
      const token = generateToken(email);
      res.cookie("token", token);
      res.send("Logged in!");
    } catch (error) {
      console.log(error, "Something wrong");
      res.status(500).send("Internal Server Error");
    }
  };
  module.exports={
    Signin,
    Signup
  }
  
  