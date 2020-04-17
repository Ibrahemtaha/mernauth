var express = require("express");
var router = express.Router();

/* GET users listing. */
const { signup } = require("../controllers/auth");

// import validators
const { userSignupValidator } = require("../validators/auth");
const { runValidation } = require("../validators/index");

router.post("/signup", userSignupValidator, runValidation, signup);

module.exports = router;
