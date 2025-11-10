module.exports = {
  config: { name: 'uptime', description: 'Show uptime' },
  run: async ({ reply }) => {
    const s = process.uptime();
    reply(`Uptime: ${Math.floor(s/60)}m ${Math.floor(s%60)}s`);
  }
};
