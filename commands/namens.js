const discord = require("discord.js");

module.exports.run = async(bot,message,args) =>{

    console.log(args);
    var guild = message.guild;
    var guildicon = guild.iconURL();
    var usericon = message.author.avatarURL();


    if(args[1]){ 
        console.log('Ik kom hier uberhaupt terecht');
        
        var Mention = args[2];
        var mention = (`<@&${Mention}>`);
        var bericht = args.slice(3).join(' ');

        
        
        var botEmbed = new discord.MessageEmbed()
        .setTitle("Nieuwe guild mededeling.")
        .setDescription("Graag het onderstaande bericht even doorlezen, dit is een mededeling vanuit het guild beheer.")
        .setColor("#0099ff")
        .setThumbnail(guildicon)
        .addFields(
        { name: 'Bericht:' , value: `${bericht}`},
        )
        .setFooter("Met vriendelijke groet:"+" "+"Het admin team Dutch Guardian Angels");
        
        
        
        bot.channels.cache.get(args[1]).send(botEmbed);
        if (Mention != 'Geen'){
        bot.channels.cache.get(args[1]).send(Mention);
        }
        }


    return message.channel.send("Zie het kanaal:"+ " " + message.guild.channels.cache.get(args[1]).toString());



}
module.exports.help = {
    name: "namens"
}