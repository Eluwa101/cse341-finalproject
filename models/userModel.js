const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: false,
      unique: true,
      lowercase: true
    },

    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user'
    },

    oauthId: {
      type: String
    }
  },

  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);