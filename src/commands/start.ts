import * as TelegramBot from 'node-telegram-bot-api';

export const handleStart = (bot: TelegramBot, msg: TelegramBot.Message) => {
    bot.sendMessage(msg.chat.id, 'Chào mừng bạn đến với Chatbot Kinh Doanh! Sử dụng /add_order để thêm đơn hàng.');
}