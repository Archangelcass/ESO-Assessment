const discord = require("discord.js");

module.exports.run = async(bot,message,args) =>{

    // !announcement title | bericht | kleur | kanaal
    if (message.member.roles.cache.some(role => role.name === 'Seraphim')) {
    
    //if(message.member.roles.has(allowedRole.id)){
      //  return message.reply(`deze gebruiker is: ${roles}`);
    //}
   console.log("Test");
    }
    if (!message.member.roles.cache.some(role => role.name === 'De Lelijkste')) {
    
        //if(message.member.roles.has(allowedRole.id)){
          //  return message.reply(`deze gebruiker is: ${roles}`);
        //}
       return message.channel.send("Er is maar één <@&" +"843799770153615370"+ "> En jij bent dat niet");
        }

}


module.exports.help = {
    name: "announcement"
}