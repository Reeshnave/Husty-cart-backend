const mongoose =require('mongoose');

const UserSchema= new mongoose.Schema(
    {
        email:{
            type:String,
            requried:true,
            unique:true,
            miniLength:3,
            maxLength:30
        },
        password:{
            type:String,
            requried:true,
            miniLength:6
        },
        fullname:{
            type:String,
            requried:true,
            maxLength:50
        },
        addressId:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Address",
        
        }],
        productId:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Product"
            }
        ],
        role:{
            type:String,
            default:"user"

        }

        
    },
    {timestamps:true}
)
const User= mongoose.model('User',UserSchema)
module.exports=User;