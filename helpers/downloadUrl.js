import fs from "fs";
import fetch from "node-fetch"
import timestamp from "time-stamp";
import sanitize from "sanitize-filename";
import { verifyPath } from "./verifyFilePath.js";
import { logEntry } from "./logData.js";
import { CONFIG } from "../config.js";

const resultsPath = CONFIG.resultsPath
verifyPath(resultsPath);
const ts = timestamp('YYYY/MM/DD:HH:mm:ss');
let filename = sanitize(ts);
let filePath = `${resultsPath}image-${filename}.jpg`


export async function download(imageData, prompt, index) {
    
    if(index){
        filename = `${filename}--${index}`
        filePath = `${resultsPath}image-${filename}.jpg`
    }

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

    if(CONFIG.logImageResDetails){
        imageData.data[0].revised_prompt
        console.log('g_id',g_id);
    }

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






