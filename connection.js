var mysql = require('mysql');

const connection = mysql.createConnection({
  host: '164.52.216.37',
  user: 'root',
  password: "micro@440027",
  database: 'swayam2021'
})

connection.connect();

module.exports = connection;