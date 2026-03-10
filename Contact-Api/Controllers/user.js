import bcrypt from "bcryptjs"
import { User } from "../Models/User.js";
import jwt from "jsonwebtoken"


export const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (name === "" || email === "" || password === "")
    return res.json({ message: "Please fill are input" });

  let user = await User.findOne({ email });
  if (user) return res.json({ message: "Email Already Exist", success: false });

  const hashPassword = await bcrypt.hash(password, 10)

  user = await User.create({ name, email, password: hashPassword });

  // console.log("Printing data", req.body);
  res.json({ message: "User Created Succesfully...!", success: true, user });
}


export const login = async (req, res) => {
    const {email, password} = req.body

    if(email === "" || password === "")
        return res.json({ message: "Please fill are input" })

    const user = await User.findOne({email})
    if(!user) return res.json({ message: "User not Exist", success: false })

    const validPass = await bcrypt.compare(password, user.password)
    if(!validPass) return res.status(400).json({ message: "Invalid Password", success: false })

    res.json({ message: `Welcome ${user.name}`, success: true })
}