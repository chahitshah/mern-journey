import { PDFParse } from "pdf-parse";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { MistralAIEmbeddings} from "@langchain/mistralai";
import {Pinecone} from "@pinecone-database/pinecone";
import dotenv from "dotenv";
dotenv.config();
import fs from "fs";

const pc = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY
});
const index = pc.Index("rag-learning");

//const dataBuffer = fs.readFileSync("./rag_test_document.pdf");


// const parser = new PDFParse({
//     data: dataBuffer
// });

// const result = await parser.getText();

// console.log(result.text);

//await parser.destroy();

const embeddings = new MistralAIEmbeddings({
    apiKey: process.env.MISTRAL_API_KEY,
    model: "mistral-embed",
});


// const splitter = new RecursiveCharacterTextSplitter({
//     chunkSize: 500,
//     chunkOverlap: 0,
// });

// const chunks = await splitter.splitText(result.text);


// const docs = await Promise.all(chunks.map(async (chunk) => {
//     const embedding = await embeddings.embedQuery(chunk);
//     return {
//         text: chunk,
//         embedding: embedding,
//     };
// }));

// const res = await index.upsert({
//     records: docs.map((doc, i) => ({
//         id: `doc-${i}`,
//         values: doc.embedding,
//         metadata: {
//             text: doc.text,
//         },
//     })),
// });

const queryEmbedding = await embeddings.embedQuery("What is the retrieval?");

console.log(queryEmbedding)

const results = await index.query({
    vector: queryEmbedding,
    topK: 3,
    includeMetadata: true,
});

console.log(JSON.stringify(results));