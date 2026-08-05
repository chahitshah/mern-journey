import { ChatGoogle } from "@langchain/google";

const llm = new ChatGoogle({
  apiKey: process.env.GEMINI_API_KEY,
  model: "gemini-2.5-flash",
});


export async function testAi()
{
  model.invoke("what is capital of india?").then((response)=>{
    console.log(response.text)
  })
}