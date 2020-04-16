const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("mernauth", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});

//Check connectionnnnnn
sequelize

  .authenticate()
  .then(() => {
    console.log(" connection has been esblished successfuly to mernauth");
  })
  .catch((err) => {
    console.log(" unable to connect");
  });

module.exports = sequelize;
