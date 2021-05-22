const mysql = require("mysql");
const util = require("util");

const conection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "blog_db",
});

conection.connect((error) => {
  if (error) {
    throw error;
  }

  console.log('Conection Successful');
});

const conn = util.promisify(conection.query).bind(conection);

module.exports = conn;
