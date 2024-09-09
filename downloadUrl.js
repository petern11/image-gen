import fs from "fs";
import fetch from "node-fetch"
import timestamp from "time-stamp";
import sanitize from "sanitize-filename";
import { logEntry } from "./logData.js";

const ts = timestamp('YYYY/MM/DD:HH:mm:ss');
const filename = sanitize(ts);
const filePath = `results/image-${filename}.jpg`


export async function download(imageData, prompt) {
    const url = imageData.data[0].url
    const response = await fetch(url);
    const buffer = await response.buffer();
    
    fs.writeFile(filePath, buffer, () =>
        console.log(`Finished downloading! ${filePath}`)
    );

    const g_id = url.substring(
        url.indexOf("/img-") + 5, 
        url.lastIndexOf(".png?st=")
    );

    logEntry({
        "g_id": g_id,
        "prompt": prompt,
        "filename": `image-${filename}.jpg`,
        "filePath": filePath,
        "url": url,
        "imageData": imageData,
        "timestamp": ts
    })
    

}






