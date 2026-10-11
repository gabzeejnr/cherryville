import "dotenv/config";
import { env } from "node:process";
import { Pool } from "pg";

const pool = new Pool({
    connectionString: env.DATABASE_URL
})

export default pool;