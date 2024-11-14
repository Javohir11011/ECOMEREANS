import { config } from 'dotenv'

config()

export default {
    db: {
        user: process.env.PG_USER,
        passwotd: process.env.PG_PASSWORD,
        host: process.env.PG_HOST,
        port: process.env.PG_PORT,
    },
}
