
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getRoadsideAdvice = async (userInput: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are 'Ally', the AI persona for LucidAI's driving glasses. The user is currently driving or planning a trip. Give concise, safety-first, and helpful driving advice based on this query: "${userInput}". Keep it under 50 words as if it's appearing on a heads-up display.`,
      config: {
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the road network. Please drive safely.";
  }
};
