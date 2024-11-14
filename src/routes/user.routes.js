import express from 'express'
import {
    getAllUsers,
    getOneUserById,
    createUser,
    updateUser,
    deleteUser,
} from '../controller/index.js'

export const userRouter = express.Router()

userRouter.get('/all', getAllUsers)
userRouter.get('/all/:id', getOneUserById)
userRouter.post('/new', createUser)
userRouter.put('/update/:id', updateUser)
userRouter.delete('/delete/:id', deleteUser)
