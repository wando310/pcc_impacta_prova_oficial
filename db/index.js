const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@Lucivando123",
  database: "RKPanificadora",
});
module.exports = db;
