import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.render("index.ejs");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server Started at Port ${PORT}`);
});
