// Import necessary modules
// const TelegramBot = require('node-telegram-bot-api');
import * as TelegramBot from 'node-telegram-bot-api';
import { registerCommands, knownCommands } from './commandRegistry';
import { handleError } from './commands/error';

// Replace 'YOUR_BOT_TOKEN' with the token you received from BotFather
const token = process.env.TELEGRAM_BOT_TOKEN as string;
const bot = new TelegramBot(token, { polling: true });

registerCommands(bot);

bot.on('message', (msg) => {
    if (!msg.text?.startsWith('/')) return;

    const command = msg.text.split(' ')[0];

    if (!knownCommands.includes(command)) {
        handleError(bot, msg);
    }
})

// // Command handlers
// bot.on('message', (msg) => handleError(bot, msg));
// bot.onText(/\/start/, (msg) => handleStart(bot, msg));

// // Command: /menu
// bot.onText(/\/menu/, (msg: TelegramBot.Message) => {
//     const chatId = msg.chat.id;
//     const menuOptions = {
//         reply_markup: {
//             keyboard: [['/hello', '/goodbye']] as any,
//             resize_keyboard: true,
//             one_time_keyboard: true,
//         }
//     } as TelegramBot.SendMessageOptions;

//     bot.sendMessage(chatId, 'Choose an option:', menuOptions);
// });

// // Command: /hello
// bot.onText(/\/hello/, (msg: TelegramBot.Message) => {
//     const chatId = msg.chat.id;
//     bot.sendMessage(chatId, 'Hello! 👋 ahihi');
// });

// // Command: /goodbye
// bot.onText(/\/goodbye/, (msg: TelegramBot.Message) => {
//     const chatId = msg.chat.id;
//     bot.sendMessage(chatId, 'Goodbye! 👋');
// });

// bot.onText(/\/add_order (.+)/, async (msg: TelegramBot.Message, match: RegExpExecArray | null) => {
//     console.log(msg)
//     console.log(match)
//     const orderInfo = match ? match[1] : null;
//     bot.sendMessage(msg.chat.id, `Đơn hàng đã được thêm: ${orderInfo}`);
// });