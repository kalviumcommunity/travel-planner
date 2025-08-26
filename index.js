// import dotenv from "dotenv";
// import OpenAI from "openai";

// dotenv.config();

// const client = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY
// });

// async function planTrip(destination, days) {
//   try {
//     const response = await client.responses.create({
//       model: "gpt-4.1-mini",
//       input: `Plan a ${days}-day travel itinerary for ${destination} with places to visit, food to try, and activities. Format it nicely.`
//     });

//     console.log("\n--- Travel Plan ---\n");
//     console.log(response.output[0].content[0].text);
//   } catch (error) {
//     console.error("Error generating travel plan:", error);
//   }
// }

// planTrip("chennai",1);


//one shot prompt:

// import dotenv from "dotenv";
// import OpenAI from "openai/index.js";

// dotenv.config();

// const client = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY
// });

// async function planTrip(destination, days) {
//   try {
//     const example = `
// Example:
// Destination: Tokyo
// Days: 2
// Itinerary:
// Day 1:
// - Morning: Visit Senso-ji Temple in Asakusa
// - Afternoon: Explore Akihabara for anime and electronics
// - Evening: Enjoy sushi at Tsukiji Outer Market
// Day 2:
// - Morning: Stroll through Shinjuku Gyoen National Garden
// - Afternoon: Visit Meiji Shrine and Takeshita Street in Harajuku
// - Evening: View Tokyo from Tokyo Tower
// `;

//     const response = await client.responses.create({
//       model: "gpt-4.1-mini",
//       input: `${example}
// Now, based on the above style, plan a ${days}-day travel itinerary for ${destination} with places to visit, food to try, and activities. Format it nicely.`
//     });

//     console.log("\n--- Travel Plan ---\n");
//     console.log(response.output[0].content[0].text);
//   } catch (error) {
//     console.error("Error generating travel plan:", error);
//   }
// }

// planTrip("pondicherry", 2);


// // Multi shot prompt:
// import dotenv from "dotenv";
// import OpenAI from "openai";

// dotenv.config();

// const client = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY
// });

// async function planTrip(destination, days) {
//   try {
//     const examples = `
// Example 1:
// Destination: Tokyo
// Days: 2
// Itinerary:
// Day 1:
// - Morning: Visit Senso-ji Temple in Asakusa
// - Afternoon: Explore Akihabara for anime and electronics
// - Evening: Enjoy sushi at Tsukiji Outer Market
// Day 2:
// - Morning: Stroll through Shinjuku Gyoen National Garden
// - Afternoon: Visit Meiji Shrine and Takeshita Street in Harajuku
// - Evening: View Tokyo from Tokyo Tower

// Example 2:
// Destination: Paris
// Days: 3
// Itinerary:
// Day 1:
// - Morning: Visit the Eiffel Tower
// - Afternoon: Explore the Louvre Museum
// - Evening: Enjoy dinner along the Seine River
// Day 2:
// - Morning: Walk through Montmartre and see Sacré-Cœur
// - Afternoon: Visit Musée d'Orsay
// - Evening: See a cabaret show at Moulin Rouge
// Day 3:
// - Morning: Relax at Luxembourg Gardens
// - Afternoon: Shop at Champs-Élysées
// - Evening: Sunset cruise on the Seine
// `;

//     const response = await client.responses.create({
//       model: "gpt-4.1-mini",
//       input: `${examples}
// Now, based on the above style, plan a ${days}-day travel itinerary for ${destination} with places to visit, food to try, and activities.`
//     });

//     console.log("\n--- Travel Plan ---\n");
//     console.log(response.output[0].content[0].text);
//   } catch (error) {
//     console.error("Error generating travel plan:", error);
//   }
// }

// planTrip("ooty", 3);


// //Dynamic Prompting

// import dotenv from "dotenv";
// import OpenAI from "openai";

// dotenv.config();

// const client = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// async function planTrip(destination, days, budget, interests) {
//   try {
//     const prompt = `
// You are a smart travel assistant.

// Create a personalized ${days}-day itinerary for a trip to ${destination}.
// The user is interested in: ${interests}.
// The total budget is $${budget}.

// Include:
// - Morning, afternoon, and evening activities for each day
// - Local food suggestions
// - Notable attractions
// - Budget highlights (travel, food, activities)
// Return the itinerary in clear day-wise format.
// `;

//     const response = await client.chat.completions.create({
//       model: "gpt-4.1-mini",
//       messages: [
//         { role: "system", content: "You are a helpful travel planner." },
//         { role: "user", content: prompt }
//       ],
//       temperature: 0.7, //balanced response
//       max_tokens: 1000 // to limit the length of AI's response
//     });

//     console.log("\n--- Travel Plan ---\n");
//     console.log(response.choices[0].message.content);

//   } catch (error) {
//     console.error("Error generating travel plan:", error);
//   }
// }

// // Customize this call:
// planTrip("pondicherry", 1, 600, "beaches,sunrise,sunset,food");


// //structured output

// import dotenv from "dotenv";
// import OpenAI from "openai";

// dotenv.config();

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// async function planStructuredTrip(destination, days) {
//   const examples = `
// Example 1:
// Input:
// {
//   "destination": "Tokyo",
//   "days": 2
// }

// Output:
// {
//   "day_1": {
//     "morning": "Visit Senso-ji Temple in Asakusa",
//     "afternoon": "Explore Akihabara for anime and electronics",
//     "evening": "Enjoy sushi at Tsukiji Outer Market"
//   },
//   "day_2": {
//     "morning": "Stroll through Shinjuku Gyoen National Garden",
//     "afternoon": "Visit Meiji Shrine and Takeshita Street in Harajuku",
//     "evening": "View Tokyo from Tokyo Tower"
//   }
// }

// Example 2:
// Input:
// {
//   "destination": "Paris",
//   "days": 3
// }

// Output:
// {
//   "day_1": {
//     "morning": "Visit the Eiffel Tower",
//     "afternoon": "Explore the Louvre Museum",
//     "evening": "Enjoy dinner along the Seine River"
//   },
//   "day_2": {
//     "morning": "Walk through Montmartre and see Sacré-Cœur",
//     "afternoon": "Visit Musée d'Orsay",
//     "evening": "See a cabaret show at Moulin Rouge"
//   },
//   "day_3": {
//     "morning": "Relax at Luxembourg Gardens",
//     "afternoon": "Shop at Champs-Élysées",
//     "evening": "Sunset cruise on the Seine"
//   }
// }
// `;

//   try {
//     const completion = await openai.chat.completions.create({
//       model: "gpt-4.1-mini",
//       messages: [
//         { role: "system", content: "You are a helpful travel planner AI that returns structured JSON output." },
//         {
//           role: "user",
//           content: `${examples}


// Input:
// {
//   "destination": "${destination}",
//   "days": ${days}
// }

// Output:`
//         }
//       ],
//       temperature: 0.7,
//     });

//     const rawResponse = completion.choices[0].message.content;

//     // Try to parse JSON
//     try {
//       const itinerary = JSON.parse(rawResponse);
//       console.log("\n Structured Itinerary:\n", itinerary);
//     } catch (e) {
//       console.error(" Could not parse response as JSON.");
//       console.log("Raw response:\n", rawResponse);
//     }

//   } catch (error) {
//     console.error("Error generating structured itinerary:", error);
//   }
// }

// planStructuredTrip("ooty",3 );


// // system and user prompts

// import dotenv from "dotenv";
// import OpenAI from "openai";

// dotenv.config();

// const client = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY, 
// });

// async function runPrompt() {
//   try {
//     const response = await client.chat.completions.create({
//       model: "gpt-4.1-mini", 
//       messages: [
//         {
//           role: "system",
//           content: "You are a helpful travel guide assistant. Always answer politely and give short tips.",
//         },
//         {
//           role: "user",
//           content: "I want to visit ooty. Suggest 3 must-see places.",
//         },
//       ],
//     });

//     console.log("AI Response:\n", response.choices[0].message.content);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// runPrompt();


// chain of thought prompting

import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function runCoT() {
  try {
    // Without Chain of Thought
    const simpleResponse = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content: "You are a smart travel planner assistant.",
        },
        {
          role: "user",
          content: "Plan me a 2-day trip to Goa2 on a budget of ₹15,000.",
        },
      ],
    });

    console.log("Without CoT:\n", simpleResponse.choices[0].message.content);

    // With Chain of Thought (step by step reasoning)
    const cotResponse = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content: "You are a smart travel planner assistant.",
        },
        {
          role: "user",
          content:
            "Plan me a 2-day trip to Goa on a budget of ₹15,000. Please explain your reasoning step by step before giving the final plan.",
        },
      ],
    });

    console.log("\nWith CoT:\n", cotResponse.choices[0].message.content);
  } catch (error) {
    console.error("Error:", error);
  }
}

runCoT();
