//start with 'npm init' - starts discord.js
//node src\bot.js - turns on bot
//git add . - stages changes for commit
//git commit -m "" - commits changes with a message


import { config } from 'dotenv';
config({path: '.env' });

import { Client } from 'discord.js';

const bot = new Client();

bot.on('ready', () => console.log(`${bot.user.username} is online`));

bot.login(process.env.BOT_TOKEN);