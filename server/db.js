const Pool = require('pg').Pool;

const pool = new Pool({
    user:"postgres",
    password:"olawale 1",
    host:"localhost",
    port:5432,
    database:"teamwork"
});


module.exports=pool;