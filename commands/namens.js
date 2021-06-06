const discord = require("discord.js");

module.exports.run = async(bot,message,args) =>{

    console.log(args);


    if(args[1]){ 
        console.log('Ik kom hier uberhaupt terecht');
        
        var bericht = args.slice(2).join(' ');

        
        
        var botEmbed = new discord.MessageEmbed()
        .setTitle("Dit is een zelf geprogrameerde Message Embed")
        .setDescription("Deze word gebruikt om zelf informatie te gaan voorzien over gebruikers")
        .setColor("#0099ff")
        .setThumbnail(guildicon)
        .addFields(
        { name: 'Bericht van het Admin team van de guild:' , value: `${bericht}`},
        )
        .setFooter("Met vriendelijke groet:"+" "+"Het admin team Dutch Guardian Angels");
                
        bot.channels.cache.get(args[1]).send(botEmbed);
        }


    return message.channel.send("Zie het kanaal:"+ " " + message.guild.channels.cache.get(args[1]).toString());



}
module.exports.help = {
    name: "namens"
}