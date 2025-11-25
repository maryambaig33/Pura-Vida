import { GoogleGenAI, Type } from "@google/genai";
import { VibeResponse } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateVibeReading = async (mood: string): Promise<VibeResponse> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `The user's current mood or vibe is: "${mood}".
      
      Act as a bohemian jewelry stylist and spiritual guide. 
      1. Write a short, poetic "Vibe Reading" (max 2 sentences) interpreting this mood.
      2. Suggest 3 colors that resonate with this energy.
      3. Give 1 specific styling tip for wearing jewelry with this vibe.
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
      vibeReading: "Your energy is unique and flowing like the tides today.",
      suggestedColors: ["Teal", "Gold", "White"],
      stylingTip: "Layer light pieces to keep your spirit free."
    };
  }
};
