import pool from '../database/index.js'
import { logger } from '../utils/logger.js'

export async function getAllUserService(query) {
    try {
        const allData = await pool.query(query)
        // logger.info(allData)
        return allData.rows
    } catch (error) {
        return error
    }
}

export async function getOneUserByIdService(query, id) {
    try {
        const allData = await pool.query(query, [id])
        return allData.rows
    } catch (error) {
        return error
    }
}

export async function createUserService(query, data) {
    try {
        const newData = await pool.query(query, data)
        return newData.rows
    } catch (error) {
        return error
    }
}

export async function updateUserService(query, data) {
    try {
        const newData = await pool.query(query, data)
        return newData.rows[0]
    } catch (error) {
        return error
    }
}

export async function deleteUserService(query, data) {
    try {
        const newData = await pool.query(query, data)
        return newData.rows[0]
    } catch (error) {
        return error
    }
}