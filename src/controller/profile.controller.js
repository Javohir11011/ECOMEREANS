import {
    createProfileService,
    deleteProfileService,
    getAllProfileService,
    getOneProfileByIdService,
    updateProfileService,
} from '../service/index.js'
import { logger } from '../utils/logger.js'

export async function getAllProfile(req, res, next) {
    try {
        logger.info(`INFO: /ap1/v1/profile/all METHOD:GET`)
        const data = await getAllProfileService(`
        select * from PROFILES
        `)
        return res.status(200).send({ msg: 'Ok', data: data })
    } catch (error) {
        logger.error(`ERROR: /ap1/v1/profile/all METHOD:GET ${error}`)
    }
}
export async function getOneByIdProfile(req, res, next) {
    try {
        logger.info(`INFO: /ap1/v1/profile/all/:id METHOD:GET`)
        const id = req.params.id
        const data = await getOneProfileByIdService(
            `
        select * from PROFILES WHERE id = $1
        `,
            [id]
        )
        return res.status(200).send({ msg: 'Ok', data: data })
    } catch (error) {
        logger.error(`ERROR: /ap1/v1/profile/all/:id METHOD:GET ${error}`)
    }
}

export async function createProfile(req, res, next) {
    try {
        logger.info(`INFO: /ap1/v1/profiles/ceate METHOD:POST`)
        const { platform, platform_user, user_id } = req.body
        const data = await createProfileService(
            `
        INSERT INTO
        PROFILES (platform,platform_user, user_id)
    VALUES (
            $1,
            $2,
            $3
        )`,
            [platform, platform_user, user_id]
        )
        return res.status(200).send({ msg: 'Ok', data: data })
    } catch (error) {
        logger.error(`ERROR: /ap1/v1/profiles/create METHOD:POST ${error}`)
        next(error)
    }
}

export async function updatedProfile(req, res, next) {
    try {
        logger.info(`INFO: /ap1/v1/profiles/update/:id METHOD:PUT`)
        const id = req.params.id
        const { platform, platform_user } = req.body
        const data = await updateProfileService(`
            UPDATE profiles
            set platform = $1 platform_user = $2
           WHERE id = $3`,[platform,platform_user, id]) 
        res.status(200).send({ msg: 'updated adresses' })
    } catch (error) {
        logger.error(`ERROR: /ap1/v1/profiles/update/:id METHOD:PUT ${error}`)
        next(error)
    }
}

export async function deleteProfile(req, res, next) {
    try {
        logger.info(`INFO: /ap1/v1/profiles/delete/:id METHOD:GET`)
        const id = req.params.id
        const data = await deleteProfileService(
            `
        delete from PROFILES 
        where id = $1`,
            [id]
        )
        return res.status(200).send({ msg: 'delete adresses', data: data })
    } catch (error) {
        logger.error(`ERROR: /ap1/v1/profiles/delete/:id METHOD:GET ${error}`)
        next(error)
    }
}
