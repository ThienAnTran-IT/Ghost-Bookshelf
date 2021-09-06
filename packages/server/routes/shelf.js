const pool = require("../database/database");

// Get all shelves
app.get("/shelves", async (req, res) => {
    try {
        const allShelves = await pool.query('SELECT * FROM shelves')

        res.json(allShelves.rows)
    } catch(err) {
        console.error(err.message);
    }
})

// Get shelf by id
app.get("/shelves/:id", async (req, res) => {
    const { id } = req.params
    try {
        const shelf = await pool.query(`SELECT * FROM shelves WHERE id=${id}`)

        res.json(shelf.rows[0])
    } catch(err) {
        console.error(err.message);
    }
})

// Create new shelf
app.post("/shelves", async(req, res) => {
    try {
        console.log("create shelves req: ", req.body);
        const { newShelf } = req.body;
        const newShelfQuery = await pool.query(`
            INSERT INTO shelves (id, name, created_date) 
            VALUES (${newShelf.id}, ${newShelf.name}, ${new Date()})`)

        res.json(newShelfQuery)
    } catch(err) {
        console.error(err.message);
    }
})

// Update shelf
app.put("/shelves/:id", async (req, res) => {
    try {
        const { id } = req.params
        const { shelf } = req.body
        const updateShelfQuery = await pool.query(`
            UPDATE shelves 
            SET name=${shelf.name}
            WHERE id=${id}`)

        res.json('Shelf was updated')
    } catch(err) {
        console.error(err.message);
    }
})

// Delete shelf
app.delete("/shelves/:id", async(req, res) => {
    try {
        const { id } = req.params
        const deleteQuery = await pool.query(`
            DELETE FROM shelves WHERE id=${id}`)

        res.json('Shelf is successfully deleted')
    } catch(err) {
        console.error(err.message);
    }
})





