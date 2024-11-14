import pool from '../database/index.js'
import { logger } from '../utils/logger.js'

export async function getAllProfileService(query) {
    try {
        const allData = await pool.query(query)
        // logger.info(allData)
        return allData.rows
    } catch (error) {
        return error
    }
}

export async function getOneProfileByIdService(query, id) {
    try {
        const allData = await pool.query(query, id)
        return allData.rows[0]
    } catch (error) {
        return error
    }
}

export async function createProfileService(query, data) {
    try {
        const newData = await pool.query(query, data)
        return newData.rows
    } catch (error) {
        return error
    }
}

export async function updateProfileService(query, data) {
    try {
        const putData = await pool.query(query, data)
        return putData.rows[0]
    } catch (error) {
        return error
    }
}

export async function deleteProfileService(query, data) {
    try {
        const deleteData = await pool.query(query, data)
        return deleteData.rows[0]
    } catch (error) {
        return error
    }
}
