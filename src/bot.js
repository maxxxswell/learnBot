import { config } from 'dotenv';
config({path: '.env' });

import { Client } from 'discord.js';
llll
const bot = new Client();

bot.on('ready', () => console.log(`${bot.user.username} is online`));

bot.login(process.env.BOT_TOKEN);