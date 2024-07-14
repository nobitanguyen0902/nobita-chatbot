import * as TelegramBot from 'node-telegram-bot-api';
import { handleStart } from './commands/start';

interface Command {
    pattern: RegExp;
    handler: (bot: TelegramBot, msg: TelegramBot.Message, match: RegExpExecArray | null) => void;
}

const commands: Command[] = [
    { pattern: /\/start/, handler: handleStart },
];

export const knownCommands = commands.map(command => command.pattern.source.split(' ')[0]);

export const registerCommands = (bot: TelegramBot) => {
    commands.forEach(({ pattern, handler }) => {
        bot.onText(pattern, (msg, match) => handler(bot, msg, match));
    });
};