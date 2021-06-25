import Command from './command';

export default class extends Command {
    name = 'ping';

    async execute(msg) {
        await msg.reply('Pong!');
    }
}