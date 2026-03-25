import express from "express"
import { deleteContactById, getAllContact, getContactById, getContactByUserId, newContact, updatebyContactId } 
from "../Controllers/contact.js"

const router = express.Router()

router.post('/new', newContact)

router.get('/', getAllContact)

router.get('/:id', getContactById)

router.put('/:id', updatebyContactId)

router.delete('/:id', deleteContactById)

router.get('/userid/:id', getContactByUserId)

export default router