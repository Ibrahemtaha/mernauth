const { check } = require("express-validator");

exports.userSignupValidator = [
  check("name").not().isEmpty().withMessage("Name is reuired"),
  check("email").isEmail().withMessage("Must be valid email address"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 char long"),
];

exports.userSigninValidator = [
  check("email").isEmail().withMessage("Must be valid email address"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be the same as your saved password"),
];
