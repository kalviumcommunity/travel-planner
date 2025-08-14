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


// Multi shot prompt:
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function planTrip(destination, days) {
  try {
    const examples = `
Example 1:
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

Example 2:
Destination: Paris
Days: 3
Itinerary:
Day 1:
- Morning: Visit the Eiffel Tower
- Afternoon: Explore the Louvre Museum
- Evening: Enjoy dinner along the Seine River
Day 2:
- Morning: Walk through Montmartre and see Sacré-Cœur
- Afternoon: Visit Musée d'Orsay
- Evening: See a cabaret show at Moulin Rouge
Day 3:
- Morning: Relax at Luxembourg Gardens
- Afternoon: Shop at Champs-Élysées
- Evening: Sunset cruise on the Seine
`;

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: `${examples}
Now, based on the above style, plan a ${days}-day travel itinerary for ${destination} with places to visit, food to try, and activities.`
    });

    console.log("\n--- Travel Plan ---\n");
    console.log(response.output[0].content[0].text);
  } catch (error) {
    console.error("Error generating travel plan:", error);
  }
}

planTrip("Chennai", 3);


