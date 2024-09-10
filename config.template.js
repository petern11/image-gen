const prompt = `Generate a professional-quality photo of a tropical island with palm trees with some clouds in the sky.`



// HELPFUL COMMANDS/KEYWORDS
const technicalPhotoSpecs = "This picture should emulate the technical settings of a Nikon D810 camera: ISO 64, 20mm focal length, Aperture f/9, and an Exposure Time of 1/40 Sec. It also needs to include the technique of Dynamic Range Increase."
const noRevise = "I NEED to test how the tool works with extremely simple prompts. DO NOT add any detail, just use it AS-IS:"

// REFERENCE EXAMPLES
// const yogaRef = `In the style of image 3DMh1hf5IFd6W1uyyTHIJ0nS`
// const cherryBlossomsRef = `In the style of image VWIeUkdGxbuKch89nIMEZviT`
// const guyBenchBlossomsRef = `In the style of image F9mOQUF7uY9zldYehI6A8LND`
// const beachRef = `In the style of imageWKKGScpDh1Xil90TlsZs6g19`
// const runnerRef = `In the style of 27ksdFQ5IfjFxRWgF6ZrHGMN`


// GOOD PROMPTS
// const prompt = `${noRevise} Generate an image resembling a professionally edited photography photograph, presenting a young adult engaged in listening to music through over-ear headphones with their hands holding onto the headphones while dancing. The background should be a solid color to elevate the subject and the subject should be facing the camera. Make sure the subject is on the right side of the scene. ${styleRef}`
// const prompt = `${noRevise} A Caucasian boy blowing dandelion seeds. The scene captures the essence of youth and whimsicality. He's captured mid-action, with a buoyant look of joy on his face. The background serves to elevate the subject. The picture must resemble a professional shot, with sharp focus on the boy and the seeds whilst giving a subtly blurred effect to the background for depth, just like professionally edited photography.`
// const prompt = `Generate an image resembling a professionally edited photograph. ${technicalPhotoSpecs} presenting a girl laying of the carpeted floor of natural lit room petting a dog.`
// const prompt = `${noRevise} Generate a professional-quality photo of a Caucasian woman energetically and comfortably performing yoga in an American style park. The image needs to reflect the technical settings typical of a Nikon D810 camera: ISO 64, 20mm focal length, Aperture f/9, and an Exposure Time of 1/40 Sec. Furthermore, the picture should incorporate the effect of Dynamic Range Increase.`
// const prompt = `Generate an image resembling a professionally edited photography photograph, presenting a young adult male holding a cat while smiling. The background should be a indoor setting like a living room, The lighting should be natural and bright with NO god rays coming through any windows. `
// const prompt = `${noRevise} Generate a professional-quality photo of a Caucasian woman happily strolling through a park, subject should be on the right side of the scene with cherry blossoms in the background. ${technicalPhotoSpecs} ${cherryBlossomsRef}`
// const prompt = `${noRevise} Generate a professional-quality photo, ${technicalPhotoSpecs}. The photo should be of a man happily siting on a park bench. ${guyBenchBlossomsRef}`
// const prompt = `${noRevise} Generate a stunning, professional-quality image capturing the striking beauty of a tropical island. The island should be lush with thick, verdant foliage, dominated by tall, swaying palm trees. The surrounding crystal-clear ocean waters glisten in the vibrant sunlight. Above, the sky is an endless expanse of perfect azure, dotted with a few lazily drifting, fluffy white clouds. The entire scene communicates a sense of tranquility and peace, a perfect escape from the hustle and bustle of everyday life. ${beachRef}`
// const prompt = `Generate a professional-quality photo of a kid pretending that some oranges slices are their eyes`
// const prompt = `Generate a professional-quality photo of young smiling kids in a huddle for a sports game make sure they are wearing some orange colors to represent their team`
// const prompt = `Generate a professional-quality photo of young latina adult running for exercise with headphones in their ears, and wearing and orange shirt and a cityscape in the background on a autumn evening. ${runnerRef}`


export const CONFIG = {
    rerunCount: 1,
    prompt: prompt,
    imageSize: '1792x1024',
    style: 'natural',
    quality: 'hd',
    resultsPath: `results/email/`

}