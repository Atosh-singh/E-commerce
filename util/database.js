/*
// USING MYSQL
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: "one23star#",
});

module.exports = pool.promise();
*/

// USING SEQUELIZE
const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "one23star#", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
