const turnToArray = (q: string | string[]): string[] => Array.isArray(q) ? q : [q];
const arrayQueryClause = (conditions: string[]) => (conditions.length
    ? `WHERE ${conditions.join(" AND ")}`
    : ""
)
const serverError = "Internal server error. Please try again."

export { turnToArray, arrayQueryClause, serverError }