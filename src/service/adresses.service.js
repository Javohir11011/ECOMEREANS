import pool from '../database/index.js'
import { logger } from '../utils/logger.js'

export async function getAllAdressService(query) {
    try {
        const allData = await pool.query(query)
        // logger.info(allData)
        return allData.rows
    } catch (error) {
        return error
    }
}

export async function getOneAdressByIdService(query, id) {
    try {
        const allData = await pool.query(query, id)
        return allData.rows[0]
    } catch (error) {
        return error
    }
}

export async function createAdressService(query, data) {
    try {
        const newData = await pool.query(query, data)
        return newData.rows
    } catch (error) {
        return error
    }
}

export async function updateAdressService(query, data) {
    try {
        const putData = await pool.query(query, data)
        return putData.rows[0]
    } catch (error) {
        return error
    }
}

export async function deleteAdressService(query, data) {
    try {
        const deleteData = await pool.query(query, data)
        return deleteData.rows[0]
    } catch (error) {
        return error
    }
}