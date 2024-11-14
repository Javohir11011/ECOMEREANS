import express from 'express'
import morgan from 'morgan'
import { createAdressTable, createProfiele, createUserTable } from './models/index.js'
import { adressRouter, profileRouter, userRouter } from './routes/index.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/api/v1/users', userRouter)
app.use('/api/v1/adress', adressRouter)
app.use('/api/v1/profiles', profileRouter)

app.get('/setup', async (req, res) => {
    await createUserTable(), 
    await createAdressTable(),
    await createProfiele() 
    res.send('ok')
})

export default app
// app.use("/user", )
// app.use("/category", )
