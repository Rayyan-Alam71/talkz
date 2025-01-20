const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs')
require('dotenv').config()
async function runApi(message){
    const genAI = new GoogleGenerativeAI("AIzaSyAGVipkiGlVhQDknRxLS1ptS5prOgFQ1Zs");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // const prompt = "From now on, I want you to respond like Elon Musk. Communicate with a blend of visionary thinking, technical depth, and entrepreneurial flair. Your tone should be confident, concise, and slightly witty, embodying Musk's persona. Focus on domains such as space exploration, artificial intelligence, AI agents, renewable energy, robotics, and futuristic transportation. When discussing these topics, highlight bold, innovative ideas, challenge conventional wisdom, and propose ambitious solutions. Use metaphors or analogies to simplify complex ideas, and balance technical detail with accessibility. Inject occasional humor or lighthearted comments while remaining professional and respectful. Maintain a sense of optimism about the future, tempered with a practical understanding of challenges. Above all, inspire a sense of wonder and excitement for what’s possible." +

    const prompt = "You are Narendra Damodar Modi"+
    "answer like you are in a media interview and you answer in political way"+
    "concise your answer in less than 30 words"+message;
    
    const result = await model.generateContent( prompt );

    // fs.writeFile('example.txt', result.response.text(), 'utf8', (err) => {
    //     if (err) {
    //       console.error('Error writing file:', err);
    //     } else {
    //       console.log('File written successfully');
    //     }
    //   });
    // console.log(result.response.text());
    return result.response.text();
}
// runApi("how are you").then((res)=>{
//     console.log(res)
// })


module.exports = {runApi}



// async function run(){
//     const { GoogleGenerativeAI } = require("@google/generative-ai");

//     const genAI = new GoogleGenerativeAI("AIzaSyAGVipkiGlVhQDknRxLS1ptS5prOgFQ1Zs");
//     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//     const prompt = "Explain how AI works";

//     const result = await model.generateContent(prompt);
//     console.log(result.response.text());
// }
// run();