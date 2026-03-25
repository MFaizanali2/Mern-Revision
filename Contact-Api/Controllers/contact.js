import { Contact } from "../Models/Contact.js";

export const getAllContact = async (req, res) => {
  const userContact = await Contact.find();

  if (!userContact)
    return res
      .status(400)
      .json({ message: "Contact not Exist", success: false });

  res
    .status(200)
    .json({
      message: "Contact Fetch succesfully..",
      userContact,
      success: true,
    });
};

export const newContact = async (req, res) => {
  const { name, email, phone, type } = req.body;

  if (name === "" || email === "" || phone === "" || type === "")
    return res
      .status(400)
      .json({ message: "All Input are important", success: false });

  let saveContact = await Contact.create({
    name,
    email,
    phone,
    type,
    user: req.user,
  });

  res
    .status(201)
    .json({
      message: "Contact create Succesfully....",
      saveContact,
      success: true,
    });
};

export const updatebyContactId = async (req, res) => {
  const id = req.params.id;
  const { name, email, phone, type } = req.body;

    let updatedContact = await Contact.findByIdAndUpdate(
    id,
    {
      name,
      email,
      phone,
      type,
    },
    { new: true }
  );

  if (!updatedContact)
    return res.json({ message: "No Contact exist", success: false });

  res.json({
    message: "Contact updated Successfully...!",
    updatedContact,
    success: true,
  });
};

export const deleteContactById = async (req, res) => {
  const id = req.params.id;

  let deleteContact = await Contact.findByIdAndDelete(id);

  if (!deleteContact)
    return res.json({ message: "No Contact exist", success: false });

  res.json({
    message: "Contact deleted Successfully...!",
    success: true,
  });
};

export const getContactById = async (req, res) => {
  const id = req.params.id;
  let userContact = await Contact.findById(id);

  if (!userContact)
    return res.json({ message: "No Contact find", success: "false" });

  res.json({ message: "Fetch Data", userContact, success: "True" });
};

export const getContactByUserId = async (req, res) => {
  const id = req.params.id;
  let userContact = await Contact.findById({ user: id });

  if (!userContact)
    return res.json({ message: "No Contact find", success: "false" });

  res.json({
    message: "User Specific Contact Fetched",
    userContact,
    success: "True",
  });
};
