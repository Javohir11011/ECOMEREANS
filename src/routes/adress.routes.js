import express from 'express'
import {
    createAdresses,
    deleteAdresses,
    getAllAdresses,
    getOneByIdAdresses,
    updatetAdresses,
} from '../controller/index.js'

export const adressRouter = express.Router()

adressRouter.get('/all', getAllAdresses)
adressRouter.get('/all/:id', getOneByIdAdresses)
adressRouter.post('/new', createAdresses)
adressRouter.put('/update/:id', updatetAdresses)
adressRouter.delete('/delete/:id', deleteAdresses)
