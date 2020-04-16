var User = require("../models/user");

exports.signup = (req, res) => {
  console.log("Req body on Signup", req.body),
    res.json({
      data: "you hit",
    });
};
