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

    if (args[1] == "PM"){
     
        const filter = (m) => m.author.id === message.author.id
        
        //message.author.send("Hello here is a PM").then(() => {
    await message.channel.send("Welke gebruiker wil je Verifieren?")
       await message.channel.awaitMessages(filter, {
            max: 1,
            time: 10000,
            errors: ['time']
        })
        .then( message => {
            message = message.first();
            console.log(message.content); 
         let mentionedmember = message.mentions.first();
         

        })
        await message.channel.send("Voor welke roles wil je deze gebruiker toekennen?")
        await message.channel.awaitMessages(filter, {
            max: 1,
            time: 10000,
            errors: ['time']
        })
        .then( message => {
            message = message.first();
            console.log(message.content); 
         let mentionedmember = message.mentions.first();

         const args = message.content.substring().split(" ");
         var argid = 0;
         args.forEach(arg => {
          console.log(arg);   
         });

        })
       
            .catch(collected => {
                message.channel.send('Timeout');
            });
            return message.channel.send("");
        //})

    }
}
module.exports.help = {
    name: "user"
}