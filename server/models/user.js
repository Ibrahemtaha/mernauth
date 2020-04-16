var Sequelize = require("sequelize");
// importing connection database
var sequelize = require("./db");

sequelize.sync();

var user = sequelize.define(
  "user",
  {
    user_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      //unique: true,
      autoIncrement: true,
      //autoIncrementIdentity: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      // validate: {
      //   len: [3, 25],
      // },
    },
    role: {
      type: Sequelize.ENUM,
      values: ["admin", "subscriber"],
      defaultValue: "subscriber",
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        //   isEmail: {
        //     msg: "Must be a valid email address"
        //   }
      },
    },

    password: {
      type: Sequelize.STRING,
      // validate: {
      //   len: [6, 50],
      //   is: {
      //     args: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{6,}$/,
      //     msg:
      //       "The password must contain atleast 6 characters including at least 1 uppercase, 1 lowercase and 1 digit, 1 symbol.",
      //   },
      // },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = user;
