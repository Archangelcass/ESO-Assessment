const discord = require("discord.js");

module.exports.run = async(bot,message,args) =>{

    console.log(args);

    if (args[1]){
    var Mention = args[1];
    var mention = (`<@&${Mention}>`);
    let member = message.mentions.members.first();

    console.log(member);
    }

    

    return message.channel.send("Message Received");

    

}
module.exports.help = {
    name: "rollen"
}