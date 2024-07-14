import axios from 'axios';
import * as TelegramBot from 'node-telegram-bot-api';

const haravanDomain = `${process.env.HARAVAN__DOMAIN}`;
const haravanToken = process.env.HARAVAN_TOKEN;

const axiosInstance = axios.create({
    baseURL: haravanDomain,
    headers: {
        'Authorization': `Bearer ${haravanToken}`,
        'Content-Type': 'application/json',
    }
});

export const handleSendProducts = async (bot: TelegramBot, msg: TelegramBot.Message) => {
    const chatId = msg.chat.id;

    try {
        const response = await axiosInstance.get("/products.json?limit=10");
        const products = response.data.products;

        if (products.length === 0) {
            bot.sendMessage(chatId, 'No products found.');
            return;
        }

        let message = 'Products:\n';
        products.forEach((product: any) => {
            message += `${product.title}: $${product.variants[0].price} - ${product.images[0]?.src}\n`;
        });

        bot.sendMessage(chatId, message);
    } catch (error) {
        console.error('Error fetching products:', error);
        bot.sendMessage(chatId, 'Failed to retrieve products.');
    }
}