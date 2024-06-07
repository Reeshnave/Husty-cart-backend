
const jwt = require('jsonwebtoken');
const dotenv= require('dotenv')

dotenv.config();

const secret_key = process.env.SECRET_KEY;

const adminToken=(user)=>{

    return jwt.sign({data:user.id,role:user.role},secret_key,{expiresIn:"1d"})
};
module.exports=adminToken