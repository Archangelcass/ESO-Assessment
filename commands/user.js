const discord = require("discord.js");

module.exports.run = async(bot,message,args) =>{

    console.log(args);

    if (args[1] == "Verify"){
        if (args[2]){
    var Mention = args[2];
    let member = message.mentions.members.first();
    
    let AssignedRole1 = "829664202527473695";
    let AssignedRole2 = "832177644685885440";
    let AssignedRole3 = "852439559567310879";
    let RemovedRole1 = "837235279953657887";
    
    member.roles.add(AssignedRole1).catch(console.error);
    member.roles.add(AssignedRole2).catch(console.error);
    member.roles.add(AssignedRole3).catch(console.error);
    member.roles.remove(RemovedRole1).catch(console.error);

    console.log(member);

    message.channel.send("Gebruiker:"+''+Mention+' '+"Heeft nu de role(s):"+`<@&${AssignedRole1}>,<@&${AssignedRole2}>,<@&${AssignedRole3}>`+"Extra")
    message.channel.send("Gebruiker:"+''+Mention+' '+"Heeft nu niet meer de role(s):"+`<@&${RemovedRole1}>`);
    }}

    if (args[1]== "PM"){
     
        const filter = (m) => m.author.id === message.author.id;

        message.author.send("Hello here is a PM");
        message.author.dmChannel.awaitMessages(filter, { max: 1, time: 10000, errors: ['time']})
        .then((collected) => {
        console.log(collected.message);
        })
        .catch((err) => console.log(err));
        
    }

    

    return message.channel.send("");

    

}
module.exports.help = {
    name: "user"
}