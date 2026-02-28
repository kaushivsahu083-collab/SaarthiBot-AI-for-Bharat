# SaarthiBot – AI for Bharat 🇮🇳

SaarthiBot is a voice-first AI assistant designed to improve access to public services for illiterate and low-literacy communities in India. The system enables users to access essential information through simple Hindi-style voice interaction.

---

## 📌 Problem Statement

Build an AI-powered solution that improves access to information, resources, or opportunities for communities and public systems.

---

## 🎯 Our Solution

SaarthiBot is a voice-based AI assistant that allows users to:

- Check bank balance
- Get railway timing information
- Receive platform and ticket counter guidance
- Access hospital registration assistance
- Ask general service-related questions through Generative AI

The assistant is specifically designed for users who cannot read or type, using simple spoken Hindi responses.

---

## 🧩 Core Intents

### 🏦 BankBalanceIntent
- Voice-based bank balance enquiry
- Hindi-style utterance recognition
- Simple, direct response for clarity

### 🚆 RailwayTimingIntent
- Train timing information
- Next 4-hour train schedule
- Platform details

### 🧭 RailwayNavigationIntent
- Platform navigation assistance
- Ticket counter direction guidance

### 🏥 HospitalHelpIntent
- Hospital registration guidance
- OPD enquiry support

### 🤖 Generative FAQ (Amazon Bedrock - Claude)
- Handles flexible public service questions
- Generates simple, easy-to-understand responses
- Improves conversational intelligence

---

## 🏗️ AWS Serverless Architecture

User (Voice Interface)
        ↓
Amazon Lex V2 (Intent Recognition & Dialogue Management)
        ↓
AWS Lambda (Planned Backend Logic)
        ↓
Amazon Bedrock – Claude (Generative AI)
        ↓
Amazon Polly (Text-to-Speech)
        ↓
User

This architecture ensures scalability, serverless deployment, and managed infrastructure.

---

## 🛠️ AWS Services Used

- Amazon Lex V2 – Conversational AI
- Amazon Bedrock (Claude) – Generative AI
- Amazon Polly – Voice output
- AWS Lambda – Backend processing (planned)
- Amazon DynamoDB – Data storage (future scope)
- Serverless AWS architecture model

---

## 🎯 Current Prototype Status

- Working Amazon Lex V2 chatbot
- Hindi-style utterance handling using English-India speech model
- Voice interaction enabled in AWS console
- Structured multi-intent architecture
- Amazon Bedrock integration in progress

---

## 🧠 Technical Notes

- Current prototype demonstrates Hindi-style utterance handling using English-India speech model.
- Confirmation responses are currently handled using the default English confirmation model.
- Future enhancement includes native Hindi speech recognition integration.
- Future work includes training custom confirmation recognition for regional responses like “haan”, “ji”, and “bilkul”.

---

## 🔮 Future Enhancements

- Native Hindi speech recognition support
- Multi-state dialect expansion
- Secure authentication integration (OTP / Aadhaar based)
- Real public service API integration
- Web-based deployment using AWS Amplify
- Voice-enabled public kiosk deployment model

---

## 🌍 Social Impact

SaarthiBot reduces digital exclusion by enabling voice-based access to public services. It empowers underserved communities to independently access information without relying on text-based systems or intermediaries.

---

## 👨‍💻 Developed For

AI for Bharat Hackathon – AWS Hack2Skill Prototype Phase
