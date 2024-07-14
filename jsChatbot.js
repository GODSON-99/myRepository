let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let divEl = document.getElementById("chatContainer");
let userInputEl = document.getElementById("userInput");
let sendBtnEl = document.getElementById("sendMsgBtn");

function getMessage() {
    let chatbotMsgListLength = chatbotMsgList.length;
    let chatbotMsg = chatbotMsgList[Math.ceil(Math.random() * chatbotMsgListLength) - 1];

    let replyContEl = document.createElement("div");
    replyContEl.classList.add("msg-from-chatbot-container");
    divEl.appendChild(replyContEl);
    let fromChatbot = document.createElement("span");
    fromChatbot.classList.add("msg-from-chatbot");
    fromChatbot.textContent = chatbotMsg;
    replyContEl.appendChild(fromChatbot);
}


function sendMessage() {
    let inputVal = userInputEl.value;
    let chatBotContEl = document.createElement("div");
    chatBotContEl.classList.add("msg-to-chatbot-container");
    divEl.appendChild(chatBotContEl);
    let toChatbot = document.createElement("span");
    toChatbot.classList.add("msg-to-chatbot");
    toChatbot.textContent = inputVal;
    chatBotContEl.appendChild(toChatbot);

    getMessage();
}

sendBtnEl.onclick = function() {

    if (userInputEl.value !== "") {
        sendMessage();
    } else {
        alert("enter input!!")
    }
};