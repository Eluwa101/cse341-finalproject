const mongoose = require('mongoose');

const collection2Schema = new mongoose.Schema(
  {
    // Add fields here
  },
  { timestamps: true }
);

module.exports = mongoose.model('Collection2', collection2Schema);