import { url } from "../api/index.api.js";

export function newPageSection(path: string) {
    const parsedPath = new URL(path, url);

    return parsedPath;
}

console.log(newPageSection("/enterprise#delivery-standard"))