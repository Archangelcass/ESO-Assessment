const discord = require("discord.js");

module.exports.run = async(bot,message,args) =>{

    console.log(args);

    if (args[1] == "Verify"){
        if (args[2]){
    var Mention = args[2];
    
    
    

    console.log(member);

    
    }}

    if (args[1] == "PM"){
     
        const filter = (m) => m.author.id === message.author.id
        
    await message.channel.send("Welke gebruiker wil je Verifieren?")
       await message.channel.awaitMessages(filter, {
            max: 1,
            time: 10000,
            errors: ['time']
        })
        .then(collected => {

        const response = collected.first();
        let member = response.mentions.members.first()
        
        let AssignedRole1 = "829664202527473695";
        let AssignedRole2 = "832177644685885440";
        let AssignedRole3 = "852439559567310879";
        let RemovedRole1 = "837235279953657887";
        
        member.roles.add(AssignedRole1).catch(console.error);
        member.roles.add(AssignedRole2).catch(console.error);
        member.roles.add(AssignedRole3).catch(console.error);
        member.roles.remove(RemovedRole1).catch(console.error);

        console.log(member);


        message.channel.send("Gebruiker:"+''+`${member.user}` +' '+"Heeft nu de role(s):"+`<@&${AssignedRole1}>,<@&${AssignedRole2}>,<@&${AssignedRole3}>`+"Extra")
        message.channel.send("Gebruiker:"+''+`${member.user}`+' '+"Heeft nu niet meer de role(s):"+`<@&${RemovedRole1}>`);

         
         
        })
            return;
       

    }
}
module.exports.help = {
    name: "user"
}