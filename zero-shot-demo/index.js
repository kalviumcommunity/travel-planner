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


import dotenv from "dotenv";
import OpenAI from "openai/index.js";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function planTrip(destination, days) {
  try {
    const example = `
Example:
Destination: Tokyo
Days: 2
Itinerary:
Day 1:
- Morning: Visit Senso-ji Temple in Asakusa
- Afternoon: Explore Akihabara for anime and electronics
- Evening: Enjoy sushi at Tsukiji Outer Market
Day 2:
- Morning: Stroll through Shinjuku Gyoen National Garden
- Afternoon: Visit Meiji Shrine and Takeshita Street in Harajuku
- Evening: View Tokyo from Tokyo Tower
`;

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: `${example}
Now, based on the above style, plan a ${days}-day travel itinerary for ${destination} with places to visit, food to try, and activities. Format it nicely.`
    });

    console.log("\n--- Travel Plan ---\n");
    console.log(response.output[0].content[0].text);
  } catch (error) {
    console.error("Error generating travel plan:", error);
  }
}

planTrip("ooty", 1);

