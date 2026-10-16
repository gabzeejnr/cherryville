import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });
import { env } from "node:process";

function requireEnv(env: any) {
    if (!env) throw new Error(`${env} is required`);
    return env;
}

const DATABASE = requireEnv(env.DATABASE);
const DATABASE_HOST = requireEnv(env.DATABASE_HOST);
const DATABASE_PORT = Number(requireEnv(env.DATABASE_PORT));
const DATABASE_PASSWORD = requireEnv(env.DATABASE_PASSWORD);
const DATABASE_USER = requireEnv(env.DATABASE_USER);
const DATABASE_URL = requireEnv(env.DATABASE_URL);

export {
    DATABASE, DATABASE_HOST, DATABASE_URL,
    DATABASE_PORT, DATABASE_PASSWORD, DATABASE_USER
};