const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    if (!args[1]) {
        message.reply("Please provide a link, no link , NO MUSIC.");
        return;
    }
    if (!message.member.voiceChannel) {
        message.reply("Get into a voice channel, or else no music for you!");
        return;
    }
    queue.push(args[1]);
    if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
        play(connection, message);
    });
}

module.exports.help = {
	name: "play"
}