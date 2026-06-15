AWS.config.region = "ap-southeast-1";

AWS.config.credentials = new AWS.CognitoIdentityCredentials({
IdentityPoolId: "ap-southeast-1:329e6829-824d-4ac9-8fa2-d7f3ec761a5a"
});

const lexruntime = new AWS.LexRuntimeV2();

let sessionId = crypto.randomUUID();
let isHindi = true;

function addMessage(text, sender){

const chat = document.getElementById("chat");

const msg = document.createElement("div");

msg.className = "message " + sender;

msg.innerText = text;

chat.appendChild(msg);

chat.scrollTop = chat.scrollHeight;

}

function speakText(text){

window.speechSynthesis.cancel();

const speech = new SpeechSynthesisUtterance(text);

speech.lang = isHindi ? "hi-IN" : "en-US";

speech.rate = 1;

speech.pitch = 1;

window.speechSynthesis.speak(speech);

}

async function sendToLex(message){

const params = {
botId:"D8UVP7Z4AV",
botAliasId:"TSTALIASID",
localeId:"en_IN",
sessionId:sessionId,
text:message
};

await AWS.config.credentials.getPromise();

const response = await lexruntime.recognizeText(params).promise();

return response.messages?.[0]?.content || "Sorry, I couldn't understand that.";

}

async function handleSend(){

const input = document.getElementById("userInput").value.trim();

if(!input) return;

addMessage(input,"user");

document.getElementById("userInput").value = "";

const typingMsg = document.createElement("div");

typingMsg.className = "message bot typing";

typingMsg.innerText = "Typing...";

document.getElementById("chat").appendChild(typingMsg);

try{

const reply = await sendToLex(input);

typingMsg.remove();

addMessage(reply,"bot");

speakText(reply);

}catch(error){

typingMsg.remove();

addMessage("⚠️ Unable to connect to SaarthiBot.","bot");

console.error(error);

}

}

function quickSend(text){

document.getElementById("userInput").value = text;

handleSend();

}

function startVoice(){

const SpeechRecognition =
window.SpeechRecognition ||
window.webkitSpeechRecognition;

if(!SpeechRecognition){

alert("Speech recognition not supported in this browser.");

return;

}

const recognition = new SpeechRecognition();

recognition.lang = isHindi ? "hi-IN" : "en-IN";

recognition.start();

recognition.onresult = function(event){

document.getElementById("userInput").value =
event.results[0][0].transcript;

handleSend();

};

}

function resetChat(){

sessionId = crypto.randomUUID();

document.getElementById("chat").innerHTML = `

<div class="welcome-card">

<h2>🙏 Welcome to SaarthiBot</h2>

<p>I can help with:</p>

<ul>
<li>🏦 Banking Services</li>
<li>🚆 Railway Assistance</li>
<li>🏥 Healthcare Navigation</li>
<li>🎓 Scholarships</li>
<li>🪪 Aadhaar Services</li>
<li>🚗 Driving Licence Services</li>
</ul>

<p>How may I assist you today?</p>

</div>

`;

}

function toggleLanguage(){

isHindi = !isHindi;

alert(
isHindi
? "Hindi Mode Enabled 🇮🇳"
: "English Mode Enabled 🇬🇧"
);

}

document.getElementById("userInput").addEventListener("keypress",function(e){

if(e.key==="Enter"){

handleSend();

}

});
