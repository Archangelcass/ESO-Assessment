const discord = require("discord.js");

module.exports.run = async(bot,message,args) =>{

    console.log(args);

    if (args[1] == "Verified"){
        if (args[2]){
    var Mention = args[1];
    let member = message.mentions.members.first();
    
    let AssignedRole1 = "829664202527473695"
    let AssignedRole2 = "832177644685885440"
    let AssignedRole3 = "852439559567310879"
    
    member.roles.add(AssignedRole1).catch(console.error);
    member.roles.add(AssignedRole2).catch(console.error);
    member.roles.add(AssignedRole3).catch(console.error);

    console.log(member);

    message.channel.send("Gebruiker:"+''+Mention+' '+"Heeft nu de role(s):"+`<@&${AssignedRole1}>,<@&${AssignedRole2}>,<@&${AssignedRole3}>`+"Extra")
    }}

    

    return message.channel.send("");

    

}
module.exports.help = {
    name: "rollen"
}