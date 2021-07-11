const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.info(`Logged in as ${client.user.tag}!`);
  });
const prefix = `!`;
client.on("message", function (message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift().toLowerCase();
  const userQuestion = message.content.split('!ama')
  const questionAskedConfirmation = `${message.author.username} asked: ${userQuestion[1]}`
  if (command === 'ama') {
    if (userQuestion[1].length) {
      message.reply(`Your question has been received! It will automatically be removed in 30 seconds!`).then(botReply => {
        message.delete({
          timeout: 30000
        })
        botReply.delete({
          timeout: 8000 /*time unitl delete in milliseconds*/
        });
      })
      client.channels.cache.find(channel => channel.name === '🎤-ama-questions').send(questionAskedConfirmation);
    }
  }
});
client.login()