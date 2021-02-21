const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'nodeuser',
    password: 'test123',
    database: 'nodeuser'
});

module.exports = pool;


