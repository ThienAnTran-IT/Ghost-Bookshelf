const pool = require("../database/database");

// Get all books
app.get("/books", async (req, res) => {
    try {
        const allBooks = await pool.query('SELECT * FROM books')

        res.json(allBooks.rows)
    } catch(err) {
        console.error(err.message);
    }
})

// Get book by id
app.get("/books/:id", async (req, res) => {
    const { id } = req.params
    try {
        const book = await pool.query(`SELECT * FROM books WHERE id=${id}`)

        res.json(book.rows[0])
    } catch(err) {
        console.error(err.message);
    }
})

// Create new book
app.post("/books", async(req, res) => {
    try {
        console.log("create books req: ", req.body);
        const { newBook } = req.body;
        const newBookQuery = await pool.query(`
            INSERT INTO books (id, title, author, cover, created_date) 
            VALUES (${newBook.id}, ${newBook.title}, ${newBook.author}, ${newBook.cover}, ${new Date()})`)

        res.json(newBookQuery)
    } catch(err) {
        console.error(err.message);
    }
})

// Update book
app.put("/books/:id", async (req, res) => {
    try {
        const { id } = req.params
        const { book } = req.body
        const updateBookQuery = await pool.query(`
            UPDATE books 
            SET title=${book.title}, author=${book.author}, cover=${book.cover}
            WHERE id=${id}`)

        res.json('Book was updated')
    } catch(err) {
        console.error(err.message);
    }
})

// Delete book
app.delete("/books/:id", async(req, res) => {
    try {
        const { id } = req.params
        const deleteQuery = await pool.query(`
            DELETE FROM books WHERE id=${id}`)

        res.json('Book is successfully deleted')
    } catch(err) {
        console.error(err.message);
    }
})




