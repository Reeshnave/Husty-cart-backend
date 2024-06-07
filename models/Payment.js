const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema(
    {
  userId: { type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true
          },

  cartId: { type: mongoose.Schema.Types.ObjectId,
     ref: 'Cart',
      required: true
     },
  amount: { type: Number,
     required: true
     },
  currency: { type: String,
     required: true,
      default: 'usd'
     },
  status: { type: String,
     required: true,
      default: 'pending'
     },
  paymentIntentId: { type: String,
     required: true
     },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Payment', PaymentSchema);