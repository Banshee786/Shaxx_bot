
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

  // ignore other bots
  if (msg.author.bot) {
    console.log('Ignoring msg from other bot: ' + msg.author.id);
    return;
  }

  // ignore messages that don't start with our Prefix
  // ***
  // not working when mentioned
  // ***
  // console.log('index of prefix: ' + msg.content.indexOf(prefix));
  // if (msg.content.indexOf(prefix) !== 0) return;

  //V1 Below
  if (msg.content === `${prefix}ping`) {
    msg.channel.send(`***pong***`);

 } else if (msg.content === `${prefix}doubles`) {
     msg.channel.send(`This week's crucible game mode is **doubles**. Grab a partner and prove your strength, guardians!`);

 } else if (msg.content === `${prefix}factionwar`) {
     msg.channel.send(`**Faction War is back!** Pledge to your favorite faction and prove your worth to them!`);

 } else if (msg.content === `${prefix}rumble`) {
    msg.channel.send(`This week's crucible game mode is **rumble**. Compete against five other guaridans and claim victory!`);

 } else if (msg.content === `${prefix}mayhem`) {
    msg.channel.send(`This week's crucible game mode is **mayhem**! Let the chaos escalate. Rise out of the ashes and claim victory, guadians!`);

 } else if (msg.content === `${prefix}sword`) {
    msg.channel.send(`https://www.youtube.com/watch?v=RI5KQ_yQLoU`);

 } else if (msg.content === `${prefix}ibclash`) {
    msg.channel.send(`Lord Saladin is back. **Iron Banner is live!** Gather a fireteam and compete against another team of six. The game is clash. Prove your worth to the Iron Lords and claim victory!`);

 } else if (msg.content === `${prefix}ibcontrol`) {
    msg.channel.send(`Lord Saladin is back. **Iron Banner is live!** Gather a fireteam and comepte against another team of six. The game is control. Prove your worth to the Iron Lords and claim victory!`);

 } else if (msg.content === `${prefix}ibsupremacy`) {
    msg.channel.send(`Lord Saladin is back. **Iron Banner is live!** Gather a fireteam and compete against another team of six. The game is supremacy. Prove your worth to the Iron Lords and claim victory!`);

 }

	let quotes = [
		`Fight forever guardian!`,
		`Stop it! You're SCARING THEM!`,
		`Was that all of them? THAT WAS ALL OF THEM?`,
	];
  var rand = Math.floor(Math.random() * quotes.length);
  console.log('random quote (' + rand + '): ' + quotes[rand]);

  console.log('mentions has an array of users? ' + Array.isArray(msg.mentions.members));
  console.log('mentions has an array of users? ' + Array.isArray(msg.mentions));
  console.log('bot user: ' + client.user);

	// if (msg.mentions.members.includes(client.user)) {
	// 	msg.channel.send(quotes[rand]);
	// }


});

client.login(token);
