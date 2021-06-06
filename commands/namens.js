const discord = require("discord.js");

module.exports.run = async(bot,message,args) =>{

    console.log(args);


    if(args[1]){ 
        console.log('Ik kom hier uberhaupt terecht');
        client.channels.get(args[1]).send("test bericht");

   
    return message.channel.send("Hallo!");


}
}
module.exports.help = {
    name: "namens"
}