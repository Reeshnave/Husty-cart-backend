const mongoose = require('mongoose');

const SellerSchema =new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            maxLength:50
        },
        email:{
            type:String,
            required:true,
            unique:true,
            miniLength:3,
            maxLength:30
        },
        role: {
            type: String,
            enum: ["seller", "admin"],
          },
          password: {
            type: String,
            required: true,
            minLength: 6,
          },
          productId: [{ type: mongoose.Types.ObjectId, ref: "Product" }],
        },
        
        { timestamps: true }
)
const Seller= mongoose.model('Seller',SellerSchema);
module.exports=Seller;