import { Pool } from "pg";
import {
    DATABASE, DATABASE_HOST, DATABASE_PORT,
    DATABASE_PASSWORD, DATABASE_USER, /* DATABASE_URL */
} from "./env.js";

const pool = new Pool({
    // connectionString: DATABASE_URL,
    database: DATABASE,
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    password: DATABASE_PASSWORD,
    user: DATABASE_USER
})

export default pool;