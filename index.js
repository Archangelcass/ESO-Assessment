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

        var botEmbed = new discord.MessageEmbed()
        .setTitle("Een titel")
        .setDescription("Hier een beschrijving")
        .setColor("#0099ff")
        .addField("Hey", message.username);

        return message.channel.send(botEmbed);
       
    }

});