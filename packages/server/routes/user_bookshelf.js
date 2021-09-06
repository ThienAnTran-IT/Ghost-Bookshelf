const pool = require("../database/database");

// Get all user_bookshelf
app.get("/user_bookshelf", async (req, res) => {
    try {
        const allUserBookshelves = await pool.query('SELECT * FROM user_bookshelf')

        res.json(allUserBookshelves.rows)
    } catch(err) {
        console.error(err.message);
    }
})

// Get shelf by id
app.get("/user_bookshelf/:id", async (req, res) => {
    const { id } = req.params
    try {
        const userBookshelf = await pool.query(`SELECT * FROM user_bookshelf WHERE id=${id}`)

        res.json(userBookshelf.rows[0])
    } catch(err) {
        console.error(err.message);
    }
})

// Create new shelf
app.post("/user_bookshelf", async(req, res) => {
    try {
        console.log("create user_bookshelf req: ", req.body);
        const { newUserBookshelf } = req.body;
        const newUserBookshelfQuery = await pool.query(`
            INSERT INTO user_bookshelf (id, user_id, bookshelf_id, created_date) 
            VALUES (${newUserBookshelfQuery.id}, ${newUserBookshelfQuery.user_id}, ${newUserBookshelfQuery.bookshelf_id}, ${new Date()})`)

        res.json(newUserBookshelfQuery)
    } catch(err) {
        console.error(err.message);
    }
})

// Update shelf
app.put("/user_bookshelf/:id", async (req, res) => {
    try {
        const { id } = req.params
        const { userBookshelf } = req.body
        const updateUserBookshelfQuery = await pool.query(`
            UPDATE user_bookshelf 
            SET user_id=${userBookshelf.user_id}, bookshelf_id=${userBookshelf.bookshelf_id}
            WHERE id=${id}`)

        res.json('Shelf was updated')
    } catch(err) {
        console.error(err.message);
    }
})

// Delete shelf
app.delete("/user_bookshelf/:id", async(req, res) => {
    try {
        const { id } = req.params
        const deleteQuery = await pool.query(`
            DELETE FROM user_bookshelf WHERE id=${id}`)

        res.json('user_bookshelf is successfully deleted')
    } catch(err) {
        console.error(err.message);
    }
})





