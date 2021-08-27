const discord = require("discord.js");

module.exports.run = async(bot,message,args) =>{

    console.log(args);

    
    return message.channel.send("Message Received");



}
module.exports.help = {
    name: "rollen"
}