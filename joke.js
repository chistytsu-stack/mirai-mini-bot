const jokes = [
  "কেন কম্পিউটার কখনো ছুটি নেয় না? কারণ তার কাছে 'বাগ' আছে না!",
  "প্রোগ্রামার কেন অন্ধ? কারণ সে bugs দেখতে পায় না!"
];
module.exports = {
  config: { name: 'joke', description: 'Tell a random joke' },
  run: async ({ reply }) => reply(jokes[Math.floor(Math.random()*jokes.length)])
};
