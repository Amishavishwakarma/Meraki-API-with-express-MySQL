const mysql = require('mysql');
var myconnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Nav@gur1',
    database: 'api'
})

myconnection.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
})

module.exports = myconnection

