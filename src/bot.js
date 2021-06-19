import { config } from 'dotenv';
config({path: '.env' });

import { Client } from 'discord.js';

const bot = new Client();

llll

bot.on('ready', () => console.log(`${bot.user.username} is online`));

bot.login(process.env.BOT_TOKEN);