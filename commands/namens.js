const discord = require("discord.js");

module.exports.run = async(bot,message,args) =>{


    if(args[1]){ 
        client.channels.get(args[1]).send("test bericht");


    let filter = (msg) => !msg.author.bot;

    let options = {

        max:2,
        time:60
    };

    let collector = msg.channel.createMessageCollector(filter,options)

    collector.on('collect', (m) => {
        console.log(`Collected ${m.content}`);
    });

    collector.on('end', (collected) => {
        console.log(`Collected ${collected.size} items`);
    });

    msg.reply('Welk bericht wil je mee sturen?');

   
    }

   
    return message.channel.send("Hallo!");


}

module.exports.help = {
    name: "hallo"
}