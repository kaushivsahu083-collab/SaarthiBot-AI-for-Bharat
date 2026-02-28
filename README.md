# SaarthiBot – Voice AI for Bharat 🇮🇳

SaarthiBot is a voice-based AI assistant built for the AI for Bharat Hackathon.  
Our mission is to make essential public services accessible to people who cannot comfortably read or type.

The assistant enables simple Hindi voice interaction for accessing banking, railway, and hospital-related information.

---

## 📌 Problem Statement

Build an AI-powered solution that improves access to information, resources, or opportunities for communities and public systems.

---

## 💡 Our Approach

Many public services in India are digital but text-heavy and difficult for illiterate or low-literacy users.

SaarthiBot solves this by:

- Providing voice-first interaction
- Using simple spoken Hindi responses
- Reducing dependency on written interfaces
- Supporting access to essential public services

---

## 🧩 Core Intents

### 🏦 BankBalanceIntent
Users can ask:
- “Mera bank balance kya hai”
- “Account mein kitna paisa hai”

The bot responds with a simple, spoken balance message.

---

### 🚆 Railway Assistance

#### RailwayTimingIntent
- Train timing information
- Next 4-hour schedule queries
- Platform details (simulated)

#### RailwayNavigationIntent
- Platform direction guidance
- Ticket counter assistance

Example generative response:
“सबसे पहले टिकट चेक गेट से अंदर जाएं। फिर सबसे नजदीक वाली एस्केलेटर या सीढ़ियों से ऊपर जाएं। वहां से सीधे दाएं मुड़ें और सीधे चलते जाएं, आपको प्लेटफ़ॉर्म नम्बर 3 दिखाई देगा।”

---

### 🏥 Hospital Guidance (In Progress)
- Hospital registration support
- OPD enquiry assistance

---

## 🤖 Generative AI Integration

SaarthiBot integrates **Amazon Bedrock using the Amazon Nova Lite model** to generate simplified, context-aware responses.

This allows:
- Flexible public service question handling
- Simple Hindi response generation
- Scalable conversational assistance

---

## 🔍 Prompt Engineering Strategy

To ensure accessibility for low-literacy users, prompts are designed to:

- Force short responses
- Avoid formatting or multiple options
- Use simple spoken Hindi
- Provide direct navigation instructions
- Restrict unnecessary explanations

Example prompt structure:

“You are helping a person inside an Indian railway station.  
Explain how to reach platform number 3 in very simple spoken Hindi.  
Keep answer short.  
No formatting.  
One paragraph only.”

---

## 🏗️ AWS Serverless Architecture

Voice User  
↓  
Amazon Lex V2 (Intent Recognition & Dialogue Management)  
↓  
AWS Lambda (Planned Backend Integration)  
↓  
Amazon Bedrock – Nova Lite (Generative AI Responses)  
↓  
Amazon Polly (Text-to-Speech)  
↓  
Voice Response to User  

This architecture is fully serverless, scalable, and built using AWS managed services.

---

## 🛠 AWS Services Used

- Amazon Lex V2  
- Amazon Bedrock (Amazon Nova Lite model)  
- Amazon Polly  
- AWS Lambda (planned integration)  
- Serverless AWS infrastructure  

---

## 🎯 Current Prototype Status

- Working Amazon Lex V2 chatbot
- Hindi-style utterance handling using English-India speech model
- Voice interaction enabled in AWS console
- Structured multi-intent architecture
- Amazon Bedrock (Nova Lite) tested and functional
- Functional hackathon prototype using simulated service responses

---

## 🧠 Technical Notes

- Current prototype demonstrates Hindi-style utterance handling using English-India speech model.
- Confirmation responses are currently handled using the default English confirmation model.
- Future enhancement includes native Hindi speech recognition integration.
- Future work includes training custom confirmation recognition for regional responses like “haan”, “ji”, and “bilkul”.

---

## 🔮 Future Enhancements

- Multi-state dialect support
- Secure authentication integration
- Real public service API integration
- Web deployment using AWS Amplify
- Voice-enabled kiosk deployment in railway stations and hospitals

---

## 🌍 Social Impact

SaarthiBot aims to reduce digital exclusion by enabling voice-based access to public services.  
It empowers underserved communities to independently access important information without relying on text-based systems.

---

## 👨‍💻 Built For

AI for Bharat Hackathon – AWS Hack2Skill Prototype Phase
