import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "express";
import userRouter from "./Routes/user.js";
import contactRouter from "./Routes/contact.js"


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
dotenv.config();

mongoose
  .connect(process.env.MONGODB, {
    dbName: "Nodejs_Course",
  })
  .then(() => console.log("Mongodb Connected"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.json({ message: "Start Create Contact API" });
});

app.use("/api/user", userRouter);

app.use("/api/contact", contactRouter);

const Port = process.env.PORT;

app.listen(Port, () => console.log(`Server is running on port ${Port}`));
