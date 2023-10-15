const { Sequelize, DataTypes } = require("sequelize");

const connection = new Sequelize("e-doctor", "root", "root", {
  host: "localhost",
  dialect: "mysql",  
  logging: false,  
});


connection.authenticate()
  .then(() => {
    console.log("Database is connected successfully!");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = { connection, DataTypes };
