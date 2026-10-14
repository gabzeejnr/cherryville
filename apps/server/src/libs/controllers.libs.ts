const turnToArray = (q: string | string[]): string[] => Array.isArray(q) ? q : [q];

export { turnToArray }