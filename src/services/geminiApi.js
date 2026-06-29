import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GEMINI_API_KEY
);

export async function analyzeRepository(repository) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

const prompt = `
You are a senior software engineer and mentor.

Analyze this GitHub repository.

Repository Name:
${repository.name}

Description:
${repository.description}

Primary Language:
${repository.language}

Return ONLY valid JSON.

Do not use markdown.

Return exactly this structure:

{
  "summary":"...",
  "difficulty":"Beginner or Intermediate or Advanced",
  "skills":[
    "...",
    "...",
    "...",
    "..."
  ],
  "roadmap":[
    "...",
    "...",
    "...",
    "...",
    "..."
  ],
  "miniProject":"..."
}
`;

  const result = await model.generateContent(prompt);

  const text = result.response.text();

  const cleanText = text.replace(/```json/g, "").replace(/```/g, "").trim();

return JSON.parse(cleanText);
}