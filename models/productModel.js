const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    price: {
      type: Number,
      required: true,
      min: 0
    },

    category: {
      type: String,
      required: true
    },

    imageUrl: {
      type: String,
      required: true
    },

    stock: {
      type: Number,
      default: 0
    },

    rating: {
      type: Number,
      default: 0
    },

    isAvailable: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);