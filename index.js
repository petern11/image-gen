
import OpenAI from "openai";
import { download } from "./helpers/downloadUrl.js";
import { CONFIG } from "./config.js";

const runcount = CONFIG.rerunCount

for (let index = 0; index < runcount; index++) {
  console.log(`Running ${index +1} of ${runcount}`);
  
  const openai = new OpenAI();
  const image = await openai.images.generate({ 
    prompt: CONFIG.prompt,
    model: "dall-e-3",
    n: 1,
    size: CONFIG.imageSize,
    style: CONFIG.style,
    quality: CONFIG.quality
  });
  
  await download(image, CONFIG.prompt, index);
}
