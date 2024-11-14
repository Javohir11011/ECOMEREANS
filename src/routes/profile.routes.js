import express from 'express'
import {
    createProfile,
    deleteProfile,
    getAllProfile,
    getOneByIdProfile,
    updatedProfile,
} from '../controller/index.js'

export const profileRouter = express.Router()

profileRouter.get('/all', getAllProfile)
profileRouter.get('/all/:id', getOneByIdProfile)
profileRouter.post('/new', createProfile)
profileRouter.put('/update/:id', updatedProfile)
profileRouter.delete('/delete/:id', deleteProfile)
