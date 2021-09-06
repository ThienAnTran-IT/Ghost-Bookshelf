const Pool = require('pg').Pool;

const pool = new Pool({
    host: "db-ghost-bookshelf-instance-1.cud155zexrpc.ap-southeast-1.rds.amazonaws.com",
    port: 5432,
    user: "Ghost",
    password: "Helloween",
    database: "Bookshelves"
})

module.exports = pool;