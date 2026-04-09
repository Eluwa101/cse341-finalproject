const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// Controller functions for OAuth

// Example: Handle OAuth callback
const callback = (req, res) => {
  res.send('OAuth callback logic goes here');
};

const authController = (req, res) => {
  // #swagger.ignore = true
  //#swagger.tags=['User']
  const token = jwt.sign({ id: req.user._id, role: req.user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });
  res.json({ success: true, token });
};


module.exports = {
  callback,
  authController
};