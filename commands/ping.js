module.exports = {
  name: 'ping',
  description: 'the most basic troubleshooter we can come up with',
  execute(message, args) {
    message.channel.send('Pong');
  },
};
