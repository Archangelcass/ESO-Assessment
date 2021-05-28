const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");

const bot = new discord.Client();
bot.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);

    var jsfiles = files.filter(f => f.split(".").pop() === "js");

    if(jsfiles.length <= 0){
        console.log("Geen files te vinden")
        return;
    }

    jsfiles.forEach((f, i) => {
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

    if(!message.content.startsWith(prefix)) return;

    var commands = bot.commands.get(command.slice(prefix.length))

    if(commands) commands.run(bot,message,command);

    console.log(command);
});