import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "express";
import { User } from "./Models/User.js";

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

app.post("/api/user/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (name === "" || email === "" || password === "")
    return res.json({ message: "Please fill are input" });

  let user = await User.findOne({ email });
  if (user) return res.json({ message: "Email Already Exist", success: false });

  user = await User.create({ name, email, password });

  // console.log("Printing data", req.body);
  res.json({ message: "User Created Succesfully...!", success: true, user });
});

const Port = process.env.PORT;

app.listen(Port, () => console.log(`Server is running on port ${Port}`));
