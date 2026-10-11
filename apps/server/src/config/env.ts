import "dotenv/config";

function requireEnv(env: string) {
    if (!env) throw new Error(`${env.toUpperCase()} is required`);
    return env;
}

export { };