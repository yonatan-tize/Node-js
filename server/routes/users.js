import express from 'express'
import {getUser, getUsers, postUser, putUser, deleteUser} from "../controller/userController.js"

const router = express.Router()



// app.use(express.static(path.join(__dirname, 'public')))

//get all users
router.get('/', getUsers)

router.get('/:id', getUser)

router.post('/', postUser)

router.put('/:id', putUser)

router.delete('/:id', deleteUser)

export default router