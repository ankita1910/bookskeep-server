const mysql = require('mysql')
const mySqlPool = mysql.createPool({
    host: 'localhost',
    user: 'ankita',
    password: 'ankita',
    database: 'bookskeep',
    connectionLimit: 5
})

module.exports = mySqlPool
