require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");

const token = process.env.TELE_TOKEN;
const bot = new TelegramBot(token, { polling: true });
console.log("bot initialized");
// console.log(token);
  bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;
  
  bot.sendMessage(chatId, "Nice to talking with you, brother\nThis is created by tj-8");
});