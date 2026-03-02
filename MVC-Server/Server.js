import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
app.use(express.urlencoded({ extended: true }));
dotenv.config();

mongoose
  .connect(process.env.MONGODB, {
    dbName: "Nodejs_Course",
  })
  .then(() => console.log("MongoDb Connected..!"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`PORT Started at ${PORT}`);
});
