import { GoogleGenAI, Type } from "@google/genai";
import { VibeResponse } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateVibeReading = async (mood: string): Promise<VibeResponse> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `The user's current mood or vibe is: "${mood}".
      
      Act as a trendy, bohemian jewelry stylist for a brand like Pura Vida. 
      1. Write a fun, short "Vibe Reading" (max 2 sentences) that feels like a horoscope or best friend advice.
      2. Suggest 3 specific colors (e.g. "Sunset Orange", "Ocean Teal") that resonate with this energy.
      3. Give 1 styling tip for stacking bracelets or rings.
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

    if (response.text) {
      return JSON.parse(response.text) as VibeResponse;
    }
    
    throw new Error("No response text from Gemini");

  } catch (error) {
    console.error("Error generating vibe:", error);
    // Fallback in case of error (graceful degradation)
    return {
      vibeReading: "Your energy is radiating good vibes only today!",
      suggestedColors: ["Turquoise", "Coral", "Gold"],
      stylingTip: "Mix metals and woven textures for that effortless beach look."
    };
  }
};