const mongoose = require('mongoose');

// Define the product schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    validate(value) {
      if (value < 0) throw new Error('Negative price is not allowed.');
    }
  },
  categoryId:[
    {
         type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true 
    }
  ],
  subcategory: {
    type: String,
    required: true
  },
  sellerId:[{
    type: mongoose.Schema.Types.ObjectId, ref: 'Seller', required: true 
  }],
  stock: {
    type: Number,
    required: true,
    min: [0, 'Stock cannot be less than zero.']
  },
  ratings: {
    type: Number,
    default: 0
  },
  numReviews: {
    type: Number,
    default: 0
  },
  images: [
    {
      type: String,
      required: true
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create and export the Product model
const Product = mongoose.model('Product', productSchema);
module.exports = Product;