## Smart Travel Planner AI ##

Smart Travel Planner AI is an AI-powered web app that helps travelers plan trips quickly and intelligently. It provides personalized destination suggestions, AI-generated day-by-day schedules, budget estimation, and live weather & flight information using external APIs. It also features an AI chat assistant for travel tips, visa requirements, and safety guidance.

## Features

Personalized Destinations – Based on user interests, budget & dates

AI-Generated Daily Plans – Top attractions, food experiences, day-wise schedule

Budget Estimation – Flights, accommodation, food & activities

Live Weather & Flight Data – Real-time updates via APIs

AI Travel Chat Assistant – Answers questions on safety, culture & local tips


## AI Concepts Used

# Prompting – 
Dynamic prompts from user inputs for relevant trip generation

# Structured Output – 
Responses in JSON for easy frontend integration

# Function Calling –
AI triggers external APIs (flights, weather) automatically

# RAG (Retrieval-Augmented Generation) – 
Uses vector database (Pinecone/Weaviate) to retrieve travel FAQs, safety, and cultural data for factually accurate answers

## Implementation Goals

Correctness: Ensure accurate and personalized travel plans based on input

Efficiency: Use optimized APIs and AI function calling for fast response

Scalability: Cloud-ready backend and vector database for handling high traffic
