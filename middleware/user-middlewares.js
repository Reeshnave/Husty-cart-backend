const jwt = require('jsonwebtoken');
const dotenv= require('dotenv')

dotenv.config();

const secret_key = process.env.SECRET_KEY;

const authenticateUser=(req,res,next)=>{
    const token=req.cookies.token

    jwt.verify(token,secret_key,(err,user)=>{
        console.log(err)

        if(err)return res.sendStatus(403);
        req.user=user;
        console.log(req.user.role);

        next();
    })
}
module.exports=authenticateUser