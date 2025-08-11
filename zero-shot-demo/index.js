import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function planTrip(destination, days) {
  try {
    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: `Plan a ${days}-day travel itinerary for ${destination} with places to visit, food to try, and activities. Format it nicely.`
    });

    console.log("\n--- Travel Plan ---\n");
    console.log(response.output[0].content[0].text);
  } catch (error) {
    console.error("Error generating travel plan:", error);
  }
}

planTrip("Pondicherry",1);
