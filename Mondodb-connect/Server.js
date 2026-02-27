import express from "express"

const app = express()

app.get('/', (req, res) => {
    res.send("Welcome to backend")
})

const PORT = 5000
app.listen(PORT, () => {
    console.log(`PORT Started at ${PORT}`)
})