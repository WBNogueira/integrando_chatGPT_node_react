//import OpenAI from "openai";
//const OpenAI = require("openai");
const { Configuration, OpenAIApi } = require("openai");

module.exports = class openai {
  static configuration() {
    //const openai = new OpenAI({
    //apiKey: process.env.OPENAI_API_KEY,
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    return new OpenAIApi(configuration)
  }

  static textCompletion({ prompt }) {
    return {
      model: "text-davinci-003",
      prompt: `${prompt}`,
      temperature: 1,
      max_tokens: 3500,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0
    }
  }
}
