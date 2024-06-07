const mongoose =require('mongoose')

const AddressSchema = new mongoose.Schema(
    {
       address:{
        type: String,
        required:true
       } ,
       city:{
        type:String,
        required:true
       },
       state:{
        type:String,
        required:true
       },
       pincode:{
        type:String,
        required:true
       },
       phone:{
        type:String,
        required:true
       }
    },
    {timestamps:true}
)
const Address=mongoose.model('Address',AddressSchema);
module.exports=Address