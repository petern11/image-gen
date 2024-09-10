import fs from "fs";

const LOG_FILE_NAME = 'log.json';

export function logEntry(logData) {
    // Check if the file or directory exists asynchronously
    fs.stat(LOG_FILE_NAME, (err, stats) => {
        if (err) {
            // NO FILE CREATE IT
            fs.writeFileSync(LOG_FILE_NAME, JSON.stringify([logData]))
        } else {
            // FILE IS THERES UPDATE DATA
            const rawdata = fs.readFileSync(LOG_FILE_NAME);
            const data = JSON.parse(rawdata);
            const updatedData = JSON.stringify([...data, logData])
            fs.writeFileSync(LOG_FILE_NAME, updatedData);
        }
    });
}