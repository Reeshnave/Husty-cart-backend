const mongoose= require('mongoose')

require('dotenv').config()


const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log('db connected')
    }
    catch(error){
        console.error("error")
    }
}
module.exports=connectDB