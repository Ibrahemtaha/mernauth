var express = require("express");
var router = express.Router();

/* GET users listing. */
const { signup } = require("../controllers/auth");
router.post("/signup", signup);

module.exports = router;
