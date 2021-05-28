const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = reguire("fs");

const bot = new discord.Client();
bot.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(error) console.log(error);

    var jsfiles = files.filter(f => f.split(".").pop() === "js");

    if(jsfiles.length <= 0){
        console.log("Geen files te vinden")
        return;
    }

    jsfiles.foreach((f, i) => {
        var fileGet = require(`./commands/${f}`)
        console.log(`De file ${f} is geladen`);

        bot.commands.set(fileGet.help.name, fileGet);

    })
});
bot.login(process.env.token);

bot.on("ready", async () => {

    console.log(`${bot.user.username} is online,`);
    bot.user.setActivity("Inventarisatie", { type: "Playing" });

});

bot.on("message", async message => {

    if (message.author.bot) return;

    if (message.channel.type == "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var commands = bot.commands.get(command.slice(prefix.length))

    if(commands) commands.run(bot,message,command);

    console.log(command);

   /* if (command === `${prefix}hallo`) {
        return message.channel.send("Hallo!");
       
    }*/
    
    if (command === `${prefix}info`) {
    
    var guild = message.guild;
    var guildicon = guild.iconURL();
    var usericon = message.author.avatarURL();


    console.log(guildicon)
        var botEmbed = new discord.MessageEmbed()
        .setTitle("Dit is een zelf geprogrameerde Message Embed")
        .setDescription("Deze word gebruikt om zelf informatie te gaan voorzien aan gebruikers")
        .setColor("#0099ff")
        .setThumbnail(guildicon)
        .setFooter("Deze Embed is geschreven door:"+" "+message.author.username,usericon);

        return message.channel.send(botEmbed);
       
    }

});