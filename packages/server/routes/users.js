const pool = require("../database/database");

// Get all users
app.get("/users", async (req, res) => {
    try {
        const allUsers = await pool.query('SELECT * FROM users')

        res.json(allUsers.rows)
    } catch(err) {
        console.error(err.message);
    }
})

// Get user by id
app.get("/users/:id", async (req, res) => {
    const { id } = req.params
    try {
        const user = await pool.query(`SELECT * FROM users WHERE id=${id}`)

        res.json(user.rows[0])
    } catch(err) {
        console.error(err.message);
    }
})

// Create new user
app.post("/users", async(req, res) => {
    try {
        console.log("create users req: ", req.body);
        const { newUser } = req.body;
        const newUserQuery = await pool.query(`
            INSERT INTO users (id, username, password, created_date) 
            VALUES (${newUser.id}, ${newUser.username}, ${newUser.password},${new Date()})`)

        res.json(newUserQuery)
    } catch(err) {
        console.error(err.message);
    }
})

// Update user
app.put("/users/:id", async (req, res) => {
    try {
        const { id } = req.params
        const { user } = req.body
        const updateUserQuery = await pool.query(`
            UPDATE users 
            SET username=${user.username}, password=${user.password}
            WHERE id=${id}`)

        res.json('Users was updated')
    } catch(err) {
        console.error(err.message);
    }
})

// Delete user
app.delete("/users/:id", async(req, res) => {
    try {
        const { id } = req.params
        const deleteQuery = await pool.query(`DELETE FROM users WHERE id=${id}`)

        res.json('Users is successfully deleted')
    } catch(err) {
        console.error(err.message);
    }
})





