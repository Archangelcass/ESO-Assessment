const discord = require("discord.js");

module.exports.run = async(bot,message,args) =>{

    console.log(args);

    if (args[1]){
    var Mention = args[1];
    var mention = (`<@&${Mention}>`);
    let member = message.mentions.members.first();

    let roleID = "866995362212347914"
    
    member.roles.add(roleID).catch(console.error);

    console.log(member);

    message.channel.send("Gebruiker:"+''+mention+' '+"Heeft nu de role(s):"+`<@&${roleID}>`+"Extra")
    }

    

    return message.channel.send("");

    

}
module.exports.help = {
    name: "rollen"
}