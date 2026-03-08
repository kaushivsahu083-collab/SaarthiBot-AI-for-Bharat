# SaarthiBot – Voice AI for Bharat 🇮🇳

![AI for Bharat](https://img.shields.io/badge/Hackathon-AI%20for%20Bharat-orange)
![AWS](https://img.shields.io/badge/Powered%20by-AWS-yellow)
![Amazon Lex](https://img.shields.io/badge/Amazon-Lex-blue)
![Amazon Bedrock](https://img.shields.io/badge/AI-Bedrock-purple)
![Serverless](https://img.shields.io/badge/Architecture-Serverless-green)

Voice-based AI assistant helping citizens access public services using natural language.

---

# 👥 Team Information

**Team Name:** Voice Surya  

---

# 📖 Project Overview

SaarthiBot is a **voice-based AI assistant** developed for the **AI for Bharat Hackathon**.

The goal of SaarthiBot is to make essential public services accessible to people who may not be comfortable reading or typing.

Users can interact with the system using **simple Hindi voice queries** to receive guidance related to:

- Government schemes
- Banking assistance
- Railway station navigation
- Hospital services

The system focuses on **voice-first interaction**, making public services more accessible for citizens with **limited digital literacy**.

---

# 📌 Problem Statement

Many public services in India are available digitally, but they are often **text-heavy and difficult to navigate**.

Citizens who have limited literacy or limited experience using digital platforms often struggle to access these services.

SaarthiBot solves this challenge by enabling **voice-based interaction**, allowing users to ask questions naturally and receive **simple spoken responses**.

---

# 💡 Our Approach

SaarthiBot provides a **voice-first conversational interface** designed specifically for accessibility.

Key principles of our approach:

- Voice interaction instead of complex text interfaces
- Simple spoken Hindi responses
- Easy access to essential public services
- Reduced dependency on digital literacy

This approach allows users to **interact naturally and obtain useful information quickly**.

---

# 🚀 Why SaarthiBot is Innovative

SaarthiBot introduces a **voice-first AI interface** designed for communities where literacy and digital accessibility remain major challenges.

Unlike traditional chatbots, SaarthiBot focuses on **natural spoken communication**.

Key innovations include:

- Voice-first design for low-literacy users
- Simple Hindi conversational responses
- Generative AI integration for flexible queries
- Serverless AWS architecture for scalability
- Potential deployment as **voice kiosks in public spaces**

This makes SaarthiBot a **digital companion that simplifies access to essential services**.

---

# 🧩 Core Intents

## 🏦 BankBalanceIntent

Users can ask questions such as:

- "Mera bank balance kya hai?"
- "Account mein kitna paisa hai?"

For security reasons, SaarthiBot explains **how users can check their balance through ATM, mobile banking, or bank branch services**.

---

## 🚆 Railway Assistance

### RailwayNavigationIntent

SaarthiBot helps users navigate railway stations.

Example query:

**"Platform number 3 kahan hai?"**

Example response:

"सबसे पहले टिकट चेक गेट से अंदर जाएं। फिर एस्केलेटर या सीढ़ियों से ऊपर जाएं। वहां से दाएं मुड़ें और सीधे चलते जाएं, आपको प्लेटफॉर्म नम्बर 3 दिखाई देगा।"

---

## 🏥 Hospital Guidance

SaarthiBot can also help visitors locate services inside hospitals such as:

- Emergency ward
- Pharmacy
- Laboratory
- Registration desk

This helps users quickly navigate large hospitals.

---

# 🤖 Generative AI Integration

SaarthiBot integrates **Amazon Bedrock (Nova Lite model)** to generate simplified and context-aware responses.

Benefits:

- Handles flexible public service questions
- Generates simple Hindi responses
- Enables scalable conversational AI assistance

---

# 🔍 Prompt Engineering Strategy

Prompts are designed specifically for **low-literacy users**.

Prompt guidelines:

- Short responses
- Simple spoken Hindi
- No complex formatting
- Direct navigation instructions
- Avoid unnecessary explanations

Example prompt:

"You are helping a person inside an Indian railway station.  
Explain how to reach platform number 3 in very simple spoken Hindi.  
Keep answer short.  
No formatting.  
One paragraph only."

---

# 🏗 System Architecture

User Voice Input  
↓  
Amazon Lex V2 (Intent Recognition & Dialogue Management)  
↓  
AWS Lambda (Backend Processing)  
↓  
Amazon Bedrock – Nova Lite (Response Generation)  
↓  
Amazon Polly (Text to Speech)  
↓  
Voice Response to User  

This architecture is **fully serverless and scalable using AWS services**.

---

# 🛠 AWS Services Used

- Amazon Lex V2  
- Amazon Bedrock (Nova Lite model)  
- AWS Lambda  
- Amazon S3  
- AWS Amplify  
- Serverless AWS Infrastructure  

---

# 🎯 Current Prototype Status

- Working Amazon Lex V2 chatbot
- Hindi-style utterance handling using English-India speech model
- Voice interaction enabled in AWS console
- Multi-intent conversational design
- Amazon Bedrock Nova Lite integrated
- Functional prototype with simulated responses

---

# 🧠 Technical Notes

- Current prototype demonstrates Hindi-style utterance handling using English-India speech model.
- Confirmation responses are currently handled using the default English confirmation model.
- Future enhancement includes native Hindi speech recognition integration.
- Future work includes training custom confirmation recognition for responses like **"haan", "ji", and "bilkul"**.

---

# 🔮 Future Enhancements

- Support for regional languages and dialects
- Secure authentication for banking services
- Integration with real public service APIs
- Web deployment using AWS Amplify
- Voice-enabled kiosks in railway stations and hospitals

---

# 🌍 Social Impact

SaarthiBot aims to reduce **digital exclusion** by enabling voice-based access to public services.

The system empowers underserved communities to independently access important information without relying on complex digital interfaces.

---

# 🎥 Demo Video

Watch the working prototype:

https://drive.google.com/file/d/1M6vMPDr5rukw_8XKmig09HcQHei7uX22/view?usp=drivesdk

---

# 👨‍💻 Built For

**AI for Bharat Hackathon – AWS Hack2Skill Prototype Phase**

Team: **Voice Surya**
