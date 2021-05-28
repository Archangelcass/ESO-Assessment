const discord = require("discord.js");

module.exports.run = async(bot,message,args) =>{

    // !announcement title | bericht | kleur | kanaal

    var roles = message.member.RoleManager.cache;
   return message.reply(`deze gebruiker is: ${roles}`);
}


module.exports.help = {
    name: "announcement"
}