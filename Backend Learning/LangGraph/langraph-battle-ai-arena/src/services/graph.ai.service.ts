import { StateSchema, MessagesValue, ReducedValue, StateGraph, START, END } from "@langchain/langgraph";
import { HumanMessage } from "@langchain/core/messages";
import type { GraphNode } from "@langchain/langgraph";
import { geminimodel, mistralmodel, coheremodel, groqmodel } from "./model.service.js";
import { z } from "zod";

const judgeRecommendationSchema = z.object({
    solution_1_score: z.number().min(0).max(10),
    solution_2_score: z.number().min(0).max(10),
});

const State = new StateSchema({
  messages: MessagesValue,
  solution_1 : new ReducedValue(z.string().default(""),{
    reducer:(current,next)=>{
        return next
    }
  }),

  solution_2 : new ReducedValue(z.string().default(""),{
    reducer:(current,next)=>{
        return next
    }
  }),

  judge_recommendation: new ReducedValue(judgeRecommendationSchema.default({
    solution_1_score: 0,
    solution_2_score: 0,
  }), {
    reducer:(current,next)=>{
        return next
    }
  })
});

const solutionNode: GraphNode<typeof State> = async (state) => {
    const userMessage = state.messages[0];
    if (!userMessage) {
        throw new Error("A user message is required to generate solutions.");
    }

    const [solution_1, cohere_solution] = await Promise.all([
        groqmodel.invoke([userMessage]).catch((error: unknown) => {
            console.warn("GROQ request failed; using Gemini for solution 1.", error);
            return geminimodel.invoke([userMessage]);
        }),
        coheremodel.invoke([userMessage])
    ]);

    return {
        solution_1:solution_1.text,
        solution_2:cohere_solution.text
    }
}

const judgeNode: GraphNode<typeof State> = async (state) => {
    const userMessage = state.messages[0];
    if (!userMessage) {
        throw new Error("A user message is required to judge the solutions.");
    }

    const recommendation = await geminimodel
        .withStructuredOutput(judgeRecommendationSchema)
        .invoke(`Compare both answers for correctness and relevance to the user's question.
Score each answer from 0 to 10. Return both scores.

Question:
${userMessage.content}

Solution 1:
${state.solution_1}

Solution 2:
${state.solution_2}`);

    return { judge_recommendation: recommendation };
}

const graph = new StateGraph(State)
    .addNode("solution", solutionNode)
    .addNode("judge", judgeNode)
    .addEdge(START, "solution")
    .addEdge("solution", "judge")
    .addEdge("judge", END)
    .compile();

export default async function(userMessages: string) {
    const result = await graph.invoke({
        messages: [
            new HumanMessage(userMessages)
        ]
    });

    console.log("Final Result:", result);
    return result;
}