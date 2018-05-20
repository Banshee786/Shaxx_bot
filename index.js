
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

 } else if (msg.content === `${prefix}shaxxHelp`) {
 	msg.channel.send(`!ping \n !doubles \n !factionwar \n !rumble \n !mayhem \n !sword \n !ibclash \n !ibcontrol \n !ibsupremacy`);
 }

	let quotes = [
		`Fight forever guardian!`,
		`Stop it! You're SCARING THEM!`,
		`Was that all of them? THAT WAS ALL OF THEM?`,
		`Get back out there.`,
		`Step up.`,
		`Hey... hit me... hard as you can.`,
		`No need to be polite.`,
		`You want the Crucible? I *am* the Crucible.`,
		`You look like you've got what it takes.`,
		`The darkness may as well come in and take the place if that's all we've got.`,
		`Rise and shine, Guardian.`,
		`Cayde ran through the Crucible like it was a game... sly bastard.`,
		`Honor is earned.`,
		`Are you ready, Oryx slayer?`,
		`I trust you're prepared, Hive slayer.`,
		`I'm not gonna tell you how I lost the horn; you couldn't handle it.`,
		`I'd tell you to hit me, but I think it would hurt.`,
		`Wasting my time is no way to impress me, Dreg.`,
		`Work together. And you might survive.`,
		`No holding back! Your enemies won't!`,
		`Watch your back, Guardian. No one else will.`,
		`Haha! The Crucible is no place for mercy.`,
		`Oh, did they ever stand a chance.`,
		`You fight to win, Guardian. So fight.`,
		`Regroup and combine your efforts. Or suffer the consequences.`,
		`I can't believe what I'm seeing!`,
		`What I wouldn't give to fight again beyond the walls. I would tear out a Vex heart with my teeth! I would sear the Cabal with my burning Light, challenge the Fallen Kells to personal combat and scatter them! I... I've been watching too many Crucible matches.`,
		`With ten like you. I could end the war.`,
		`Let them burn in your light.`,
		`My... this is... this is beautiful... You continue to be my greatest success, Guardian.`,
		`Always good to see another hero of the Tower.`,
		`What do you mean you can't concentrate when I'm shouting, get back out there.`,
		`They can't win if they're dead! Haha!`,
		`Your enemy understands the art of demolition. You'll get there.`,
		`Fought like a Titan of the First Pillar!`,
		`Ikora would be proud of you, Warlock!`,
		`Hunters like you blaze a path for the rest of us!`,
		`Who says Warlocks are better with books than with guns? OK... it was me. But I was lying. Rage is an excellent motivator.`,
		`I don't even know who to be angry at!`,
		`You're crushing them. Send them home crying.`,
	];
  var rand = Math.floor(Math.random() * quotes.length);

  if (msg.isMentioned(client.user)) {
    msg.channel.send(quotes[rand]);
  }
  
  
  
});

client.login(token);
