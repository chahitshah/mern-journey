import { ChatGoogle } from "@langchain/google";
import { ChatMistralAI } from "@langchain/mistralai"
import { ChatCohere } from "@langchain/cohere"
import {ChatGroq} from "@langchain/groq"
import config from "../config/config.js";

const geminimodel = new ChatGoogle({
    model: "gemini-3.8-flash",
    apiKey: config.GOOGLE_API_KEY
});

const mistralmodel = new ChatMistralAI({
    model: "mistral-small-latest",
    apiKey: config.MISTRAL_API_KEY
});

const coheremodel = new ChatCohere({
    model: "command-a-03-2025",
    apiKey: config.COHERE_API_KEY
});

const groqmodel = new ChatGroq({
    model: "qwen/qwen3.8-27b",
    apiKey: config.GROQ_API_KEY
});

export { geminimodel, mistralmodel, coheremodel, groqmodel };