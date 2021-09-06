const express = require("express");
const port = process.env.PORT || 5000;
const app = express();

const pool = require("./database/database");

// middleware
app.use(express.json())

app.get("/", (req, res) => {
    res.send("I'm a backend server")
});

app.listen(port, (err) => {
    if (err) {
        console.log(`ERROR: ${err.message}`);
    } else {
        console.log(`Listening on port ${port}`)
    }
});