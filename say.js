module.exports = {
  config: { name: 'say', description: 'Make bot say something' },
  run: async ({ args, reply }) => {
    if (!args.length) return reply('Usage: !say <message>');
    reply(args.join(' '));
  }
};
