const discord = require("discord.js");

module.exports.run = async(bot,message,args) =>{

    message.channel.send("Hallo, hoe kan ik helpen?!");

    const filter = message => message.author.id === guildmember.id
    channel.awaitMessages(filter, { max: 4, time: 60, errors: 'time'})
    .then(collected => console.log(collected.size))
    .catch(collected => console.log())


}

module.exports.help = {
    name: "hallo"
}