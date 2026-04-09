const express = require('express');
const router = express.Router();
const passport = require("passport");
const {authController} = require("../controllers/authController")

// OAuth routes
// router.get('/login', (req, res) => {
//   res.send('OAuth login endpoint is working');
// });


// Redirect to GitHub OAuth
router.get("/login", (req, res, next) => {
  // #swagger.ignore = true
  passport.authenticate("github", { scope: ["user:email"] })(req, res, next);
});

//  Callback GitHub
router.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: "/"
  }),
    authController  
)

// Logout
router.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
});

module.exports = router;