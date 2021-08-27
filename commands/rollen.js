const discord = require("discord.js");

module.exports.run = async(bot,message,args) =>{

    console.log(args);
    var guild = message.guild;
    var guildicon = guild.iconURL();
    var usericon = message.author.avatarURL();


    if(args[1]){ 
        console.log('Ik kom hier uberhaupt terecht');
        


        }


    return message.channel.send("Message Received");



}
module.exports.help = {
    name: "rollen"
}