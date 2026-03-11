import { Contact } from "../Models/Contact.js"

export const getAllContact = async(req, res) => {
    const userContact = await Contact.find()

    if(!userContact)
        return res.status(400).json({message: "Contact not Exist", success: false})

    res.status(200).json({message: "Contact Fetch succesfully..", userContact, success: true})
}



export const newContact = async (req, res) => {
    const {name, email, phone, type} = req.body

    if(name === "" || email === "" || phone === "" || type === "")
        return res.status(400).json({message: "All Input are important", success: false})

    let saveContact = await Contact.create({
        name, email, phone, type, user: req.user
    })

    res.status(201).json({message: "Contact create Succesfully....", saveContact, success: true})
}