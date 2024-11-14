import {
    getAllUserService,
    getOneUserByIdService,
    createUserService,
    updateUserService,
    deleteUserService,
} from '../service/index.js'
import { logger } from '../utils/logger.js'

export async function getAllUsers(req, res, next) {
    try {
        logger.info(`INFO: /ap1/v1/users/all METHOD:GET`)
        const allUsers = await getAllUserService(`Select * from users`)
        logger.info(allUsers)
        res.status(200).send({ msg: 'OK', data: allUsers })
    } catch (error) {
        logger.error(`ERROR: /ap1/v1/users/all METHOD:GET ${error}`)
        next(error)
    }
}

export async function getOneUserById(req, res, next) {
    try {
        logger.info(`INFO: /ap1/v1/users/all/:id METHOD:GET`)

        const oneUser = await getOneUserByIdService(
            'Select * from users where id=$1',
            req.params.id
        )
        res.status(200).send({ msg: 'OK', data: oneUser })
    } catch (error) {
        logger.error(`ERROR: /ap1/v1/users/all/:id METHOD:GET ${error}`)
        
        next(error)
    }
}

export async function createUser(req, res, next) {
    try {
        logger.info(`INFO: /ap1/v1/users/ceate METHOD:POST`)

        const {
            name,
            email,
            password,
            avatar,
            username,
            brith_of_date,
            phone_number,
        } = req.body
        const newUser = await createUserService(
            'Insert into users (name, email, password, avatar, username, brith_of_date, phone_number) values ($1, $2, $3,$4,$5,$6,$7) returning *',
            [
                name,
                email,
                password,
                avatar,
                username,
                brith_of_date,
                phone_number,
            ]
        )
        // console.log(newUser)

        res.status(200).send({ msg: 'User created...', id: newUser.id })
    } catch (error) {
        logger.error(`ERROR: /ap1/v1/users/create METHOD:POST ${error}`)
        next(error)
    }
}

export async function updateUser(req, res, next) {
    try {
        logger.info(`INFO: /ap1/v1/users/update/:id METHOD:PUT`)
        const id = req.params.id
        const {name, email, username} = req.body
        logger.info(req.body)
        const data = await updateUserService(`
        UPDATE users
        set name = $1, email = $2, username = $3
        WHERE id = $4
        `,[name, email, username,id])
        return res.status(200).send({ msg: "Udate users..."})
    } catch (error) {
        logger.error(`ERROR: /ap1/v1/users/update/:id METHOD:PUT ${error}`)
        next(error)
    }
}

export async function deleteUser(req, res, next) {
    try {
        logger.info(`INFO: /ap1/v1/users/delete/:id METHOD:GET`)
        const id = req.params.id;
        const data = await deleteUserService(`
        DELETE from users
        WHERE id = $1`,[id])
        res.status(200).send({ msg: 'OK' })
    } catch (error) {
        logger.error(`ERROR: /ap1/v1/users/delete/:id METHOD:GET ${error}`)

        next(error)
    }
}
