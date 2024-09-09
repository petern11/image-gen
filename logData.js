import fs from "fs";

const LOG_FILE_NAME = 'log.json';

export function logEntry(logData) {
    const rawdata = fs.readFileSync(LOG_FILE_NAME);
    const data= JSON.parse(rawdata);
    const updatedData = JSON.stringify([...data, logData])

    fs.writeFileSync(LOG_FILE_NAME, updatedData);
}