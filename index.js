
const { prefix } = require('./config.json');
const { token } = require('./secrets.json');
// const { exec } = require('child_process');
const ytdl = require('ytdl-core');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(`Prefix is ${prefix}.`);
  client.user.setActivity('Crucible Match #1784', { type: 'WATCHING' });
});

//error handling-not functional?
//client.on('error', (e) => console.error(e));

client.on('message', msg => {
  // debugging
  // console.log(msg.content);

  // ignore other bots
  if (msg.author.bot) {
    console.log('Ignoring msg from other bot: ' + msg.author.username + '#' + msg.author.discriminator);
    return;
  }

  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  //ingores messages not in guilds(servers)
    if (!msg.guild) return;

    //MUSIC

    if (command === 'join') {

        if (msg.member.voiceChannel) {
            msg.member.voiceChannel.join()
            .then(connection => {
                msg.reply('Are you ready, Oryx slayer?');
            })
            .catch(console.log);
        } else {
            msg.reply("No holding back! Your enemies won't!");
        }
    }
    if (command === 'leave') {

        if (msg.member.voiceChannel) {
            msg.member.voiceChannel.leave();
        }
    }
    if (command === 'play') {
      if (args.length < 1) {
        msg.reply(`syntax is important, guardian: ${prefix}play [url]`);
        return;
      }
      if (msg.member.voiceChannel) {
        msg.member.voiceChannel.join()
        console.log('getting url for audio stream...');
        // args[0] is youtube url to play
        const streamOptions = { seek: 0, volume: 0.5 };
        const stream = ytdl(`${args[0]}`, { filter : 'audioonly' });
        msg.member.voiceChannel.connection.playStream(stream, streamOptions);
      }
    }
    if (command === 'stop') {
      if (msg.member.voiceChannel) {
          console.log('stopping music.');
          msg.member.voiceChannel.connection.dispatcher.end();
      }
    }
    if (command === 'pause') {
      if (msg.member.voiceChannel) {
        console.log('Pausing Music...');
        msg.member.voiceChannel.connection.dispatcher.pause();
      }
    }
    if (command === 'resume') {
      if (msg.member.voiceChannel) {
        console.log('Resuming Playback...');
        msg.member.voiceChannel.connection.dispatcher.resume();
      }
    }

  //MODERATION





  // ignore messages that don't start with our Prefix
  // ***
  // not working when mentioned
  // ***
  // console.log('index of prefix: ' + msg.content.indexOf(prefix));
  // if (msg.content.indexOf(prefix) !== 0) return;

  //V1 Below
  if (command === 'ping') {
    msg.channel.send(`***pong***`);

 } else if (command === 'doubles') {
     msg.channel.send(`This week's crucible game mode is **doubles**. Grab a partner and prove your strength, guardians!`);

 } else if (command === 'factionwar') {
     msg.channel.send(`**Faction War is back!** Pledge to your favorite faction and prove your worth to them!`);

 } else if (command === 'supremacy') {
    msg.channel.send(`This week's crucible game mode is **supremacy**. Claim crests, achieve victory!`);

 } else if (command === 'mayhem') {
    msg.channel.send(`This week's crucible game mode is **mayhem**! Let the chaos escalate. Rise out of the ashes and claim victory, guadians!`);

 } else if (command === 'sword') {
    msg.channel.send(`https://www.youtube.com/watch?v=RI5KQ_yQLoU`);

} else if (command === 'ibclash') {
    msg.channel.send(`Lord Saladin is back. **Iron Banner is live!** Gather a fireteam and compete against another team of six. The game is clash. Prove your worth to the Iron Lords and claim victory!`);

 } else if (command === 'ibcontrol') {
    msg.channel.send(`Lord Saladin is back. **Iron Banner is live!** Gather a fireteam and comepte against another team of six. The game is control. Prove your worth to the Iron Lords and claim victory!`);

 } else if (command === 'ibsupremacy') {
    msg.channel.send(`Lord Saladin is back. **Iron Banner is live!** Gather a fireteam and compete against another team of six. The game is supremacy. Prove your worth to the Iron Lords and claim victory!`);

 } else if (command === 'shaxxHelp') {
 	msg.channel.send(`!ping \n!doubles \n!factionwar \n!rumble \n!mayhem \n!sword \n!ibclash \n!ibcontrol \n!ibsupremacy`);
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
		`WHAT DO YOU MEAN YOU CANT CONCENTRATE WHEN I'M SHOUTUNG, GET BACK OUT THERE!`,
		`They can't win if they're dead! Haha!`,
		`Your enemy understands the art of demolition. You'll get there.`,
		`Fought like a Titan of the First Pillar!`,
		`Ikora would be proud of you, Warlock!`,
		`Hunters like you blaze a path for the rest of us!`,
		`Who says Warlocks are better with books than with guns? OK... it was me. But I was lying. Rage is an excellent motivator.`,
		`I DON'T EVEN KNOW WHO TO BE ANGRY AT!`,
		`You're crushing them. Send them home crying.`,
	];
  var rand = Math.floor(Math.random() * quotes.length);

  if (msg.isMentioned(client.user)) {
    msg.channel.send(quotes[rand]);
  }



});

client.login(token);
