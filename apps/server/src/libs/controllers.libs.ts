const turnToArray = (q: string | string[]): string[] => Array.isArray(q) ? q : [q];
const arrayQueryClause = (conditions: string[]) => (conditions.length
    ? `WHERE ${conditions.join(" AND ")}`
    : ""
)

export { turnToArray, arrayQueryClause }