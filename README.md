# SaarthiBot – Voice AI for Bharat 🇮🇳

SaarthiBot is a voice-based AI assistant built for the AI for Bharat Hackathon.  
Our goal is simple: make essential public services accessible to people who cannot comfortably read or type.

The assistant allows users to interact using simple spoken Hindi to access banking, railway, and hospital-related information.

---

## 📌 Problem Statement

Build an AI-powered solution that improves access to information, resources, or opportunities for communities and public systems.

---

## 💡 Our Approach

Many public services in India are increasingly digital, but most systems are text-heavy and difficult for illiterate or low-literacy users.

SaarthiBot solves this by:

- Providing voice-first interaction
- Using simple Hindi-style responses
- Reducing dependency on written interfaces
- Supporting access to essential public services

---

## 🧩 Current Features

### 🏦 Bank Balance Enquiry
Users can ask for their bank balance using spoken Hindi phrases such as:
- “Mera bank balance kya hai”
- “Account mein kitna paisa hai”

The bot responds with a simple voice output.

---

### 🚆 Railway Assistance

**RailwayTimingIntent**
- Train timing information
- Next 4-hour schedule queries
- Platform details (simulated)

**RailwayNavigationIntent**
- Platform direction guidance
- Ticket counter assistance

---

### 🏥 Hospital Guidance (In Progress)
- Hospital registration support
- OPD enquiry guidance

---

### 🤖 Generative AI Support

SaarthiBot integrates Amazon Bedrock (Claude) to handle flexible, general public-service-related questions.

This enables more natural and scalable conversational ability beyond fixed intents.

---

## 🏗️ AWS Architecture

Voice User  
↓  
Amazon Lex V2 (Intent Recognition & Dialogue Management)  
↓  
AWS Lambda (Planned backend integration)  
↓  
Amazon Bedrock – Claude (Generative AI responses)  
↓  
Amazon Polly (Text-to-Speech)  
↓  
Voice Response to User  

This architecture is fully serverless and scalable using AWS managed services.

---

## 🛠 AWS Services Used

- Amazon Lex V2
- Amazon Bedrock (Claude)
- Amazon Polly
- AWS Lambda (planned integration)
- Serverless AWS infrastructure

---

## 🎯 Current Prototype Status

- Working Amazon Lex V2 chatbot
- Hindi-style utterance handling using English-India speech model
- Voice interaction enabled in AWS console
- Structured multi-intent architecture
- Bedrock integration in progress
- Functional prototype built during hackathon phase

*Note: The current prototype uses simulated responses for demonstration purposes.*

---

## 🧠 Technical Notes

- Current prototype demonstrates Hindi-style utterance handling using English-India speech model.
- Confirmation responses are currently handled using the default English confirmation model.
- Future enhancement includes native Hindi speech recognition model integration.
- Future work includes training custom confirmation recognition for regional affirmative responses like “haan”, “ji”, and “bilkul”.

---

## 🔮 Future Enhancements

- Multi-state dialect support
- Secure authentication integration
- Real public service API integration
- Web deployment using AWS Amplify
- Voice-enabled kiosk deployment model for railway stations and hospitals

---

## 🌍 Social Impact

SaarthiBot aims to reduce digital exclusion by enabling voice-based access to public services.  
It empowers underserved communities to independently access important information without needing to read or navigate complex interfaces.

---

## 👨‍💻 Built For

AI for Bharat Hackathon – AWS Hack2Skill Prototype Phase
