const { Client } = require('pg');

const client = new Client({
    host: "ghost-bookshelf-db.cud155zexrpc.ap-southeast-1.rds.amazonaws.com",
    port: 5432,
    user: "Ghost",
    password: "Helloween",
    database: "Bookshelves"
})

client.connect();

client.query(`select * from bookshelves`, (err, result) => {
    if (!err) {
        console.log("Rows: ", result.rows)
    }
    client.end();c
})