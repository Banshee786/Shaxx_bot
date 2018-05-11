const { prefix, token } = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(`Prefix is ${prefix}.`);
  client.user.setActivity('Crucible Match #1784', { type: 'WATCHING' });
});

client.on('message', msg => {
  // debugging
  // console.log(msg.content);

  if (msg.content === `${prefix}ping`) {
    msg.channel.send(`***pong***`);
  } else if (msg.content === `${prefix}doubles`) {
     msg.channel.send(`This week's crucible game mode is **doubles**. Grab a partner and prove your strength, guardian!`);
  } else if (msg.content === `${prefix}factionwar`) {
     msg.channel.send(`**Faction War is back!** Pledge to your favorite faction and prove your worth to them!`);
  }
});

client.login(token);
