import * as fs from "fs";

export function verifyPath(path) {
    try {
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path, { recursive: true });
        }
    } catch (err) {
        console.error(err);
    }
}