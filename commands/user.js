const discord = require("discord.js");

module.exports.run = async(bot,message,args) =>{

    console.log(args);

    if (args[1] == "Verify"){
    
    let AssignedRole1 = "829664202527473695";
    let AssignedRole2 = "832177644685885440";
    let AssignedRole3 = "852439559567310879";
    let RemovedRole1 = "837235279953657887";
    
   
    
    const filter = (m) => m.author.id === message.author.id
        
    await message.channel.send("Welke gebruiker wil je Verifieren?")
       await message.channel.awaitMessages(filter, {
            max: 1,
            time: 10000,
            errors: ['time']
        })
        .then( message => {
            message = message.first();
            console.log(message.content); 
            let member = message.mentions.members.first();
         console.log(mentionedmember);
         
         member.roles.add(AssignedRole1).catch(console.error);
         member.roles.add(AssignedRole2).catch(console.error);
         member.roles.add(AssignedRole3).catch(console.error);
         member.roles.remove(RemovedRole1).catch(console.error);

        })
       
            .catch(collected => {
                message.channel.send('Timeout');
            });


    message.channel.send("Gebruiker:"+''+member+' '+"Heeft nu de role(s):"+`<@&${AssignedRole1}>,<@&${AssignedRole2}>,<@&${AssignedRole3}>`+"Extra")
    message.channel.send("Gebruiker:"+''+member+' '+"Heeft nu niet meer de role(s):"+`<@&${RemovedRole1}>`);
    }

    if (args[1] == "PM"){
     
        
            return message.channel.send("");
       

    }
}
module.exports.help = {
    name: "user"
}