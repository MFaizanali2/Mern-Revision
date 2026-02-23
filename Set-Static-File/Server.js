import express from "express";

const app = express();
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res) => {
  res.render("index.ejs");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server Started at Port ${PORT}`);
});
