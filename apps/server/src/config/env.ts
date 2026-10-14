import "dotenv/config";
import { env } from "node:process";

function requireEnv(env: string | undefined) {
    if (!env) throw new Error(`${env} is required`);
    return env;
}

export { };