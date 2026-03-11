import express from "express"
import { getAllContact, newContact } from "../Controllers/contact.js"

const router = express.Router()

router.post('/new', newContact)

router.get('/', getAllContact)

export default router