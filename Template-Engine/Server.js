import express from "express";
import path from "path";

const app = express();
app.use(express.static(path.join(path.resolve(), "public")))

const product = [
  { device: "Mobile", company: "Apple", price: 30000 },
  { device: "Laptop", company: "Dell", price: 65000 },
  { device: "Lcd", company: "LG", price: 105000 },
];

// app.get('/', (req, res) => {
//     res.send("<h1> Welcome to Backend </h1>")
// })

app.get("/", (req, res) => {
  res.render("index.ejs", { product });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server Started at Port ${PORT}`);
});
