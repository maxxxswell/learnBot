import { readdirSync } from 'fs';

export class CommandHandler {
    commands = new Map();

    async init() {
        const fileNames = readdirSync('./src/handlers/commands');
        for (const name of fileNames) {
            const {default: Command } = await import(`./commands/${name}`);
            const command = new Command();
            if (!command.name) continue;

            this.commands.set(command.name, command);
        }
        console.log(`${fileNames.length - 1} commands loaded.`);
    }

    async handle(prefix, msg) {
        try {
            const words = msg.content // .help moderation 2
                .slice(prefix.length) // help moderation 2
                .split(' '); // ['.help', 'moderation', '2']

             await this.commands
                .get(words[0])
                ?.execute(msg, ...words.slice(1)); // ['moderation', '2']
        } catch (error) {
            await msg.reply(` ⚠ ${error.message}`);
        }
    }
}
