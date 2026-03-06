import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"

const app = express();

app.use(express.urlencoded({extended:true}))
dotenv.config()

mongoose
  .connect(
    process.env.MONGODB,
    {
      dbName: "Nodejs_Course",
    }
  )
  .then(() => console.log("Mongodb Connected"))
  .catch((error) => console.log(error));

  app.get('/',(req,res)=>{
    res.send('Star Create Contact API')
  })

const Port = process.env.PORT;

app.listen(Port, () => console.log(`Server is running on port ${Port}`));