var User = require("../models/user");
var bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// Sendgrid
const sgMail = require("@sendgrid/mail");
//sgMail.setApiKey(process.env.SENDGRD_API_KEY);
sgMail.setApiKey(process.env.SENDGRD_API_KEY2);

///
// exports.signup = (req, res) => {
//   const { name, email, password } = req.body;

//   User.findOne({ email: email }),
//     (err, user) => {
//       if (user) {
//         return res.status(400).json({
//           error: "Email is taken",
//         });
//       }
//     };
//   const hash = bcrypt.hashSync(password, 10);
//   let newUser = User.create({ name, email, password: hash });

//   /// the problem is here!
//   newUser((err, success) => {
//     if (err) {
//       console.log("Signup error", err);
//       return res.status(400).json({
//         error: err,
//       });
//     }
//     res.json({
//       success: "Signup Sucess! please singing",
//     });
//   });
// };

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  //console.log(req.body);
  const user = await User.findOne({ where: { email } });
  // User.findOne({ email }),
  // (err, user) => {
  //console.log(user);

  if (user) {
    return res.status(400).json({
      error: "Email is taken",
    });
  }
  // Token Sign
  const token = jwt.sign(
    { name, email, password },
    process.env.JWT_ACCOUNT_ACTIVATION,
    { expiresIn: "60m" }
  );
  // End Token Sign
  // Start Email Template
  const emailData = {
    from: `bremoo87@hotmail.com`,
    to: email,
    subject: `Account activation link`,
    html: `
              <h1>Please use the following link to activate your account</h1>
              <p>${process.env.CLIENT_URL}/auth/activate/${token}</p>
              <hr />
              <p>This email may contain sensetive information</p>
              <p>${process.env.CLIENT_URL}</p>
          `,
  };
  // End Email Template

  //sgMAIL Start
  sgMail
    .send(emailData)
    .then((sent) => {
      // console.log('SIGNUP EMAIL SENT', sent)
      return res.json({
        message: `Email has been sent to ${email}. Follow the instruction to activate your email `,
      });
    })

    .catch((err) => {
      //console.log("SIGNUP EMAIL SENT ERROR", err);
      return res.json({
        message: err.message,
      });
    });
  //console.log(emailData);
  // END sgMAIL Start
};
