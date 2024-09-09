
import OpenAI from "openai";
import { download } from "./downloadUrl.js";


const technicalPhotoSpecs = "This picture should emulate the technical settings of a Nikon D810 camera: ISO 64, 20mm focal length (equivalent to having used a Voigtländer 20mm f3.5 lens), Aperture f/9, and an Exposure Time of 1/40 Sec. It also needs to include the technique of Dynamic Range Increase."
const noRevise = "I NEED to test how the tool works with extremely simple prompts. DO NOT add any detail, just use it AS-IS:"
// const styleRef = "In the style of image sbWgQecj6QqAL4g2zamWBSCW"
const styleRef = "In the style of image WUcIteUrS7P7OKUHLVXMJqPK"


const prompt = `${noRevise} Generate an image resembling a professionally edited photography photograph, presenting a young adult engaged in listening to music through over-ear headphones with their hands holding onto the headphones while dancing. The background should be a solid color of #843771 to elevate the subject and the subject should be facing the camera. Make sure the subject is on the right side of the scene. ${styleRef}`
// const prompt = "Create a professionally edited photography photo of young adult of western europe descent listening to music with over the ear headphones, make the background a solid color, make sure their skin is detailed and they are facing the camera, Nikon D810 | ISO 64 | focal length 20mm (Voigtländer 20mm f3.5) | Aperture f/9 | Exposure Time 1/40 Sec (DRI)"
// const prompt = `Create a professionally edited photography photo of an kid doing there homework at the kitchen table in well lit room from natural light. ${technicalPhotoSpecs}}`
// const prompt = "Create a professionally edited photography photo of a person energetically spring cleaning their home, dusting surfaces, and vacuuming without any signs of sneezing or discomfort. Aim for sunny, well-lit indoor settings that radiate health and productivity."
// const prompt = "Create a professionally edited photography photo of a boy blowing dandelion seeds in a outdoor setting, ultra detailed, soft lighting, detailed skin texture on the girl, realistic lighting and shadows bouncing on skin"
// const prompt =  "Create a photorealistic photo young man standing outside of his appartment smiling down at the camera, ultra detailed, soft lighting, detailed skin texture on the girl, realistic lighting and shadows bouncing on skin."
// const prompt =  "A portrait of a girl laying of the carpeted floor of sunny room petting a dog, Nikon D810 | ISO 64 | focal length 20mm (Voigtländer 20mm f3.5) | Aperture f/9 | Exposure Time 1/40 Sec (DRI)"
// const prompt = "A portrait of a girl laying of the carpeted floor of sunny room petting a dog, ultra detailed, soft lighting, detailed skin texture on the girl, realistic lighting and shadows bouncing on skin"
// const prompt = 'A portrait of a man holding a cat, in his living room, Nikon D810 | ISO 64 | focal length 20mm (Voigtländer 20mm f3.5) | Aperture f/9 | Exposure Time 1/40 Sec (DRI)'

const openai = new OpenAI();
const image = await openai.images.generate({ 
  prompt: prompt,
  model: "dall-e-3",
  n: 1,
  size: "1792x1024",
  style: 'natural',
  quality: 'hd'
});


await download(image, prompt);