import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export interface RFCIResult {
    rfciScore: number;
    smpScore: number;
    explanation: string;
}

export async function estimateRFCI(topic: string): Promise<RFCIResult> {
    const prompt = `
    Analyze the topic "${topic}" and estimate its RFCI (Relative Frequency of Citation/Importance) score and SMP (Social Media Presence) score.
    
    RFCI Score: A score from 0 to 100 indicating how frequently and importantly this topic is cited in academic or authoritative sources.
    SMP Score: A score from 0 to 100 indicating its presence and virality on social media.
    
    Provide a brief explanation (max 3 sentences) justifying these scores.
    
    Return the result in strict JSON format:
    {
      "rfciScore": number,
      "smpScore": number,
      "explanation": "string"
    }
  `;

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                { role: "system", content: "You are an expert data analyst capable of estimating topic metrics." },
                { role: "user", content: prompt }
            ],
            response_format: { type: "json_object" },
        });

        const content = response.choices[0].message.content;
        if (!content) throw new Error("No content returned from OpenAI");

        const result = JSON.parse(content);
        return {
            rfciScore: result.rfciScore,
            smpScore: result.smpScore,
            explanation: result.explanation,
        };
    } catch (error) {
        console.error("Error estimating RFCI:", error);
        // Fallback or rethrow depending on needs. For now rethrow.
        throw error;
    }
}
