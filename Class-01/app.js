import express from "express"

const app = express();
app.use(express.json())

const PORT = 5000;

const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Ahmed" }
];

app.get('/', (req, res) => {
    res.send("Hello Backend")
})

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

app.get('/users',(req, res) => {
    res.json(users)
})

app.listen(PORT, (req, res) => {
    console.log(`Server is running at ${PORT}`);
})