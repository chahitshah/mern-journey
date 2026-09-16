import dotenv from "dotenv";
dotenv.config();

import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { AIMessage, HumanMessage, SystemMessage } from "@langchain/core/messages";

const geminiModel = new ChatGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
  model: "gemini-3.6-flash",
});

export async function generateResponse(messages) {
  const formattedMessages = messages.map((msg) => {
    if (msg.role === "ai") {
      return new AIMessage(msg.content);
    }
    return new HumanMessage(msg.content);
  });

  const response = await geminiModel.invoke(formattedMessages);

  return response.text;
}

export async function generateChatTitle(message) {
  try {
    const response = await geminiModel.invoke([
      new SystemMessage("Create a very short, clear chat title using at most 5 words. Return only the title, no quotes, no punctuation, no extra text."),
      new HumanMessage(`Message: ${String(message).trim()}`),
    ]);

    const title = String(response.text || "").trim();
    return title || "New chat";
  } catch (error) {
    console.warn("Title generation failed:", error.message);
    return "New chat";
  }
}