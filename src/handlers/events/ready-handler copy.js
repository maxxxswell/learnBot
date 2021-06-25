import Event from './event.js';

export default class extends Event {
    on = 'ready';

  async invoke (msg) {
    if (msg.author.bot) return;

    await msg.reply('Okay.');
    }
}