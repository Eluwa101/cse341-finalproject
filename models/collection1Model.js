const mongoose = require('mongoose');

const collection1Schema = new mongoose.Schema(
  {
    // Add fields here, for example:
    // name: { type: String, required: true },
    // description: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Collection1', collection1Schema);