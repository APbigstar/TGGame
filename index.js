const TelegramBot = require("node-telegram-bot-api");

const token = "6939617736:AAGwQhYPjBz3efc52Yi1L_tDBy6VM3tyJkI";
const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  if (messageText === "/start") {
    const gameUrl = "t.me/candy_tg_game_bot/climbing";
    const keyboard = {
      inline_keyboard: [
        [
          {
            text: "Play Game",
            url: gameUrl,
            web_app: {
              resize_keboard: true,
            },
          },
        ],
      ],
    };

    const options = {
      parse_mode: "Markdown",
      reply_markup: JSON.stringify(keyboard),
    };

    const message =
      "Hello! Welcome to the game. Click the button below to start playing:";
    bot.sendMessage(chatId, message, options);
  }
});
