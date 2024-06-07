const Seller=require('../models/Seller');
const adminToken = require('../utlis/adminToken');
const generateToken= require('../utlis/adminToken')
const bcrypt = require('bcrypt');


const Signup = async (req, res) => {
    try {
      const { email, password, name,role } = req.body
     
   
      const sellerExist = await Seller.findOne({ email });
      
      
      if (sellerExist) {
        return res.send("seller is already exist");
      }
      
      const saltRounds = 10;
      const hashpassword = await bcrypt.hash(password, saltRounds);
      
      const newSeller = new Seller({
        email,
        name,
        password:hashpassword,
        role,
      });
      
      
      const newSellerCreated = await newSeller.save();
  
      if (!newSellerCreated) {
        return res.send("Seller is not created");
      }
  
      const token = adminToken(newSellerCreated);
      
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
      console.log(email)
   
      const seller = await Seller.findOne({ email });
  
      if (!seller) {
        return res.send("User not found");
      }
  
      const matchPassword = await bcrypt.compare(password, seller.password);
  
      if (!matchPassword) {
        return res.send("Password is not correct");
      }
  
      const token = adminToken(Seller);
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
  
  