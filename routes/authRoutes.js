const express = require('express');
const router = express.Router();

// OAuth routes
router.get('/login', (req, res) => {
  res.send('OAuth login endpoint is working');
});

module.exports = router;