const mongoose= require('mongoose')
const RatingSchema= new mongoose.Schema(
    {
        userId:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"User"
            }
        ],
        productId:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Product"
            }
        ],
        rating:String,

        comment:String

    },
    {timestamps:true}
)
const Rating= mongoose.model('Rating',RatingSchema);
module.exports=Rating;