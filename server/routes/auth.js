var express = require("express");
var router = express.Router();

/* GET users listing. */
const { signup, accountActivation, signin } = require("../controllers/auth");

// import validators
const {
  userSignupValidator,
  userSigninValidator,
} = require("../validators/auth");
const { runValidation } = require("../validators/index");

router.post("/signup", userSignupValidator, runValidation, signup);
router.post("/account-activation", accountActivation);
router.post("/signin", userSigninValidator, runValidation, signin);

module.exports = router;
