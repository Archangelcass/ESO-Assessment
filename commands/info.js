const discord = require("discord.js");

module.exports.run = async(bot,message,args) => {

var guild = message.guild;
var guildicon = guild.iconURL();
var usericon = message.author.avatarURL();


console.log(guildicon)
    var botEmbed = new discord.MessageEmbed()
    .setTitle("Dit is een zelf geprogrameerde Message Embed")
    .setDescription("Deze word gebruikt om zelf informatie te gaan voorzien aan gebruikers")
    .setColor("#0099ff")
    .setThumbnail(guildicon)
    .setFooter("Deze Embed is geschreven door:"+" "+message.author.username,usericon);

    return message.channel.send(botEmbed);
}

module.exports.help = {
    name:"info"
}