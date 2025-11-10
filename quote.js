const quotes = [
  "সফলতা ধৈর্যের ফল।",
  "কঠোর পরিশ্রম সর্বদাই ফল দেয়।",
  "প্রগতিই জীবনের মূল আকাঙ্ক্ষা।"
];
module.exports = {
  config: { name: 'quote', description: 'Get an inspirational quote' },
  run: async ({ reply }) => reply(quotes[Math.floor(Math.random()*quotes.length)])
};
