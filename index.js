const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const client = new discord.Client();
client.login(process.env.token);

client.on("ready", async () => {

    console.log(`${client.user.username} is online,`);
    client.user.setActivity("Inventarisatie", { type: "Playing" });

});

client.on("message", async message => {

    if (message.author.bot) return;

    if (message.channel.type == "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    console.log(command);

    if (command === `${prefix}hallo`) {
        return message.channel.send("Hallo!");
       
    }
    
    if (command === `${prefix}info`) {
    
    var guild = message.guild;
    var guildicon = guild.iconURL();


    console.log(guildicon)
        var botEmbed = new discord.MessageEmbed()
        .setTitle("Dit is een zelf geprogrameerde Message Embed")
        .setDescription("Deze word gebruikt om zelf informatie te gaan voorzien aan gebruiekrs")
        .setColor("#0099ff")
        .addField("Auteur", message.author.username)
        .setThumbnail(guildicon)
        .setfooter("Deze Embed is geschreven door:"+" "+message.author.username,message.author.displayAvatarURL() );

        return message.channel.send(botEmbed);
       
    }

});