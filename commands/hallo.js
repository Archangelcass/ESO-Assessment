const discord = require("discord.js");

module.exports.run = async(bot,message,args) =>{

    message.channel.send("Hallo, hoe kan ik helpen?!");
}

module.exports.help = {
    name: "hallo"
}