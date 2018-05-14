module.exports = {
	name:`Ping`,
	descrption:`Ping!`,
	execute(msg, args) {
		msg.channel.send(`***Pong***`);
	},
};