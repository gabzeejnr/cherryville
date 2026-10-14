const turnToArray = (q: string | string[]): string[] => Array.isArray(q) ? q : [q];
const arrayQueryClause = (conditions: string[]) => (conditions.length
    ? `WHERE ${conditions.join(" AND ")}`
    : ""
)
const serverError = "Internal server error. Pleae try again."

export { turnToArray, arrayQueryClause, serverError }