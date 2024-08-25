const responses = [
    "Hello! How can I assist you today?",
    "I'm here to help with any questions you might have.",
    "ZiomAI at your service! What can I do for you?",
    "Need assistance? Just ask!",
    "I'm happy to help. What would you like to know?",
    "You can ask me anything. I'm here to help!",
    "How can I make your day better today?"
];

let usedResponses = [];

document.getElementById('send-btn').addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value;

    if (userInput.trim() !== '') {
        displayMessage(userInput, 'user');
        generateResponse();
        document.getElementById('user-input').value = '';
    }
});

function displayMessage(message, sender) {
    const chatDisplay = document.getElementById('chat-display');

    const messageDiv = document.createElement('div');
    messageDiv.classList.add(sender);

    const messageContent = document.createElement('p');
    messageContent.textContent = message;

    messageDiv.appendChild(messageContent);
    chatDisplay.appendChild(messageDiv);
}

function generateResponse() {
    if (usedResponses.length < responses.length) {
        let response;
        do {
            response = responses[Math.floor(Math.random() * responses.length)];
        } while (usedResponses.includes(response));

        usedResponses.push(response);
        displayMessage(response, 'bot');
    } else {
        alert("You have finished your free trial for today. Join the waitlist or try tomorrow.");
    }
}

