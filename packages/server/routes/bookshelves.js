const pool = require("../database/database");

// Get all bookshelves
app.get("/bookshelves", async (req, res) => {
    try {
        const allBookshelves = await pool.query('SELECT * FROM bookshelves')

        res.json(allBookshelves.rows)
    } catch(err) {
        console.error(err.message);
    }
})

// Get bookshelf by id
app.get("/bookshelves/:id", async (req, res) => {
    const { id } = req.params
    try {
        const bookshelf = await pool.query(`SELECT * FROM bookshelves WHERE id=${id}`)

        res.json(bookshelf.rows[0])
    } catch(err) {
        console.error(err.message);
    }
})

// Create new bookshelf
app.post("/bookshelves", async(req, res) => {
    try {
        console.log("create bookshelves req: ", req.body);
        const { newBookshelf } = req.body;
        const newBookshelfQuery = await pool.query(`
            INSERT INTO bookshelves (id, book_id, shelf_id, created_date) 
            VALUES (${newBookshelf.id}, ${newBookshelf.book_id}, ${newBookshelf.shelf_id},${new Date()})`)

        res.json(newBookshelfQuery)
    } catch(err) {
        console.error(err.message);
    }
})

// Update bookshelf
app.put("/bookshelves/:id", async (req, res) => {
    try {
        const { id } = req.params
        const { bookshelf } = req.body
        const updateBookshelfQuery = await pool.query(`
            UPDATE bookshelves 
            SET book_id=${bookshelf.book_id}, shelf_id=${bookshelf.shelf_id}
            WHERE id=${id}`)

        res.json('Bookshelves was updated')
    } catch(err) {
        console.error(err.message);
    }
})

// Delete bookshelf
app.delete("/bookshelves/:id", async(req, res) => {
    try {
        const { id } = req.params
        const deleteQuery = await pool.query(`
            DELETE FROM bookshelves WHERE id=${id}`)

        res.json('Bookshelves is successfully deleted')
    } catch(err) {
        console.error(err.message);
    }
})





