const jwt = require('jsonwebtoken');
const dotenv= require('dotenv')

dotenv.config();

const secret_key = process.env.SECRET_KEY;

const authenticateSeller=(req,res,next)=>{
    const token=req.cookies.token
console.log(token)
    jwt.verify(token,secret_key,(err,user)=>{
        
        if(err)return res.sendStatus(403);
        req.user=user;
        console.log(req.user.role);
        if (req.user.role !== "seller" && req.user.role !== "admin") {
            return res.send("not authenticated");
        }
        next();
    })
}
module.exports=authenticateSeller