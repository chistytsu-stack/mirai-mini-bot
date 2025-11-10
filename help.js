module.exports = {
  config: { name: 'help', description: 'List commands' },
  run: async ({ reply, commands }) => {
    const names = Array.from(commands.keys()).join(', ');
    reply('Commands: ' + names);
  }
};
