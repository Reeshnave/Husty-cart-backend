const mongoose =require('mongoose')

const CategorySchema= new mongoose.Schema(
    {
        categoryname:{
            type:String,
            required:true,
            unique: true
        },
        image:{
            type:String
        }
    
    },
    {timestamps:true}
)
const Category= mongoose.model('Category',CategorySchema)
module.exports=Category;