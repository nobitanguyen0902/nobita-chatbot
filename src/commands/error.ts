import * as TelegramBot from 'node-telegram-bot-api';

export const handleError = (bot: TelegramBot, msg: TelegramBot.Message) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Xin lỗi, tôi không hiểu lệnh này.');
}