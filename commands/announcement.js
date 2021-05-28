const discord = require("discord.js");

module.exports.run = async(bot,message,args) =>{

    // !announcement title | bericht | kleur | kanaal
    var allowedRole = message.guild.RoleManager.highest
   
    //if(message.member.roles.has(allowedRole.id)){
      //  return message.reply(`deze gebruiker is: ${roles}`);
    //}
   console.log(allowedRole);
}


module.exports.help = {
    name: "announcement"
}