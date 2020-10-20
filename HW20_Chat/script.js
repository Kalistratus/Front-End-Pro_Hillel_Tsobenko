const wrapper = document.querySelector("#wrapper");

function createChatContainer() {
  const chat = document.createElement("div");
  chat.className = "chat";

  return chat;
}

function createChatWindow() {
  const chatWindow = document.createElement("div");
  chatWindow.className = "chat_window";

  return chatWindow;
}

function createInputElements() {
  const inputElements = document.createElement("div");
  inputElements.className = "input_elements";

  return inputElements;
}

function createTextarea() {
  const textarea = document.createElement("textarea");
  textarea.name = "message_input";
  textarea.placeholder = "Напишите текст здесь...";
  textarea.autofocus = true;

  return textarea;
}

function createButton() {
  const button = document.createElement("button");
  button.type = "button";
  button.disabled = true;
  button.innerText = "Send";

  return button;
}


function botListen() {
  const botNotice = document.createElement("div");
  botNotice.className = "bot_notice";
  botNotice.innerText = "bot печатает...";

  return botNotice;
}


function createChat() {
  const chat = createChatContainer();
  wrapper.appendChild(chat);

  const botNotice = botListen();
  chat.appendChild(botNotice);

  const chatWindow = createChatWindow();
  chat.appendChild(chatWindow);

  const inputElements = createInputElements();
  chat.appendChild(inputElements);

  const textarea = createTextarea();
  inputElements.appendChild(textarea);

  const button = createButton();
  inputElements.appendChild(button);

  return chat;
}

createChat();


const chat = document.querySelector(".chat");
const chatWindow = document.querySelector(".chat_window");
const inputElements = document.querySelector(".input_elements");
const textarea = document.querySelector("textarea");
const button = document.querySelector("button");
const botNotice = document.querySelector(".bot_notice");


function endOfChat() {
  const endChatMessage = document.createElement("div");
  endChatMessage.className = "bot_message_end";
  endChatMessage.innerText = "Чат окончен. Для возобновления перезагрузите страницу!";

  return endChatMessage;
}


const botPhrases = [
  "Привет, как дела?",
  "Это правильный выбор",
  "Ну уж нет!",
  "Да ладно?",
  "Незнаю...",
  "Ладно, ладно... Не переживай...",
  "Как скажете!",
  "Смешно)))",
  "Хорошая погода...",
  "Удачи!" // Прощальное сообщение бота
];


function getRandomDelayTime(min = 0, max = botPhrases.length - 2) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function scrollToLastMessage() {
  const lastMessageInChat = chatWindow.lastChild;
  lastMessageInChat.scrollIntoView({
    block: "center",
    behavior: "smooth"
  });
}

function getTextFromTextarea() {
  const myMessage = document.createElement("div");
  myMessage.className = "my_message";
  myMessage.innerText = textarea.value;

  return myMessage;
}

function waitingTime(delay) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

async function botMessages(text) {
  await waitingTime(getRandomDelayTime(1000, 3000));

  const botPhrases = document.createElement("div");
  botPhrases.className = "bot_message";
  botPhrases.innerText = text;

  return botPhrases;
}


async function generateBotMessage() {
  if (chatWindow.lastChild.innerText === "Гудбай!") { // Ключевое слово для окончания чата
    botNotice.style.display = "block";
    const goodbayMessage = await botMessages(botPhrases[botPhrases.length - 1]);
    botNotice.style.display = "none";
    chatWindow.appendChild(goodbayMessage);
    chatWindow.appendChild(endOfChat());
    button.disabled = true;
    textarea.disabled = true;
  } else {
    botNotice.style.display = "block";
    const randomMessage = await botMessages(botPhrases[getRandomDelayTime()]);
    botNotice.style.display = "none";
    chatWindow.appendChild(randomMessage);
  }
}


async function displayChatMessages() {
  chatWindow.appendChild(getTextFromTextarea());
  scrollToLastMessage();

  await generateBotMessage();

  textarea.focus();
  button.disabled = true;
  textarea.value = "";

  scrollToLastMessage();
}


textarea.addEventListener("input", () => {
  if (textarea.value === "") button.disabled = true;
  else button.disabled = false;
});

button.addEventListener("click", () => displayChatMessages());

document.addEventListener("keydown", (event) => {
  if (event.key === 'Enter') {
    if (textarea.value === "") event.preventDefault();
    else displayChatMessages();
  }
})