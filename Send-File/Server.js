import express from "express";

const app = express();

const PORT = 5000;

const product = [
  { device: "Mobile", company: "Apple", price: 30000 },
  { device: "Laptop", company: "Dell", price: 65000 },
  { device: "Lcd", company: "LG", price: 105000 },
];

app.get("/", (req, res) => {
  res.send("<h1> Welcome to backend </h1>");
});

app.get("/product", (req, res) => {
  res.json({
    message: "All Product Detail",
    products: product,
    succes: true,
  });
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
