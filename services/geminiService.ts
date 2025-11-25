import { GoogleGenAI, Type } from "@google/genai";
import { VibeResponse } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateVibeReading = async (mood: string): Promise<VibeResponse> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `The user's current mood or vibe is: "${mood}".
      
      Act as a trendy, laid-back jewelry stylist for a beachy brand like Pura Vida.
      1. Write a super short, fun "Vibe Reading" (max 20 words) that feels like advice from a surfer friend.
      2. Suggest 3 specific colors (e.g. "Sunset Orange", "Teal", "Sand") that match this mood.
      3. Give 1 short styling tip (max 10 words).
      `,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            vibeReading: { type: Type.STRING },
            suggestedColors: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            stylingTip: { type: Type.STRING }
          },
          required: ["vibeReading", "suggestedColors", "stylingTip"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response text from Gemini");

    // Robust parsing: strip markdown code blocks if present
    const cleanedText = text.replace(/```json|```/g, '').trim();
    return JSON.parse(cleanedText) as VibeResponse;

  } catch (error) {
    console.error("Error generating vibe:", error);
    return {
      vibeReading: "Your good vibes are contagious today!",
      suggestedColors: ["Teal", "Coral", "Sunshine"],
      stylingTip: "Stack 'em high and let them shine."
    };
  }
};