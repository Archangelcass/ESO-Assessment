const discord = require("discord.js");

module.exports.run = async(bot,message,args) =>{

    console.log(args);


    if(args[1]){ 
        console.log('Ik kom hier uberhaupt terecht');
        
        var bericht = args.slice(2);

        bericht.join(" ");
        bot.channels.cache.get(args[1]).send(bericht);
        
        

        }


    return message.channel.send("Zie het kanaal:"+ " " + message.guild.channels.cache.get(args[1]).toString());



}
module.exports.help = {
    name: "namens"
}