import {
    createAdressService,
    deleteAdressService,
    getAllAdressService,
    getOneAdressByIdService,
    getOneUserByIdService,
    updateAdressService,
} from '../service/index.js'
import { logger } from '../utils/logger.js'

export async function getAllAdresses(req, res, next) {
    try {
        logger.info(`INFO: /ap1/v1/adres/all METHOD:GET`)
        const data = await getAllAdressService(`
        select * from adresses
        `)
        return res.status(200).send({ msg: 'Ok', data: data })
    } catch (error) {
        logger.error(`ERROR: /ap1/v1/adres/all METHOD:GET ${error}`)
    }
}
export async function getOneByIdAdresses(req, res, next) {
    try {
        logger.info(`INFO: /ap1/v1/adres/all/:id METHOD:GET`)
        const id = req.params.id
        const data = await getOneAdressByIdService(`
        select * from adresses WHERE id = $1
        `,[id])
        return res.status(200).send({ msg: 'Ok', data: data })
    } catch (error) {
        logger.error(`ERROR: /ap1/v1/adres/all/:id METHOD:GET ${error}`)
    }
}

export async function createAdresses(req, res, next) {
    try {
        logger.info(`INFO: /ap1/v1/adres/ceate METHOD:POST`)
        const {
            title,
            adressline_link_1,
            adressline_link_2,
            country,
            city,
            pastal_code,
            phone_number,
            user_id,
            create_at,
            update_at,
        } = req.body
        const data = await createAdressService(
            `
        INSERT INTO
    adresses (
        title,
        adressline_link_1,
        adressline_link_2,
        country,
        city,
        pastal_code,
        phone_number,
        user_id,
        create_at,
        update_at
    )
    VALUES (
            $1,
            $2,
            $3,
            $4,
            $5,
            $6,
            $7,
            $8,
            $9,
            $10
        )`,
            [
                title,
                adressline_link_1,
                adressline_link_2,
                country,
                city,
                pastal_code,
                phone_number,
                user_id,
                create_at,
                update_at,
            ]
        )
        return res.status(200).send({ msg: 'Ok', data: data })
    } catch (error) {
        logger.error(`ERROR: /ap1/v1/adres/create METHOD:POST ${error}`)
        next(error)
    }
}

export async function updatetAdresses(req, res, next) {
    try {
        logger.info(`INFO: /ap1/v1/adres/update/:id METHOD:PUT`)
        const id  = req.params.id
        const {title, country, city} = req.body
        const data = await updateAdressService(`
        UPDATE adresses
        set title = $1, country = $2, city = $3
        where id = $4
        `, [title, country, city, id])
        return res.status(200).send({ msg: 'updated adresses'})
    } catch (error) {
        logger.error(`ERROR: /ap1/v1/adres/update/:id METHOD:PUT ${error}`)
        next(error)
    }
}

export async function deleteAdresses(req, res, next) {
    try {
        logger.info(`INFO: /ap1/v1/adres/delete/:id METHOD:GET`)
        const id = req.params.id
        const data = await deleteAdressService(`
        delete from adresses 
        where id = $1`, [id])
        return res.status(200).send({ msg: 'delete adresses', data: data })
    } catch (error) {
        logger.error(`ERROR: /ap1/v1/adres/delete/:id METHOD:GET ${error}`)
        next(error)
    }
}
