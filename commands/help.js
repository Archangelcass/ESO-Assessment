const discord = require("discord.js");

module.exports.run = async(bot,message,args) =>{

    try{

        var text = "**Dit zijn de commando's welke beschikbaar zijn** \n\n **__Commands__** \n !hallo - Geeft een hallo terug. \n !info - Geeft een embed message terug.";

        message.author.send(text);

        message.reply("Alle command kan je vinden in jouw DM");

    }catch(error){
        message.reply("Er is iets niet goed gegaan !")
    }

}


module.exports.help = {
    name: "help"
}