const discord = require("discord.js");

const { GoogleSpreadsheet } = require('google-spreadsheet');
const { promisify } = require('util');

var creds = require('../client_secret.json');

// spreadsheet key is the long id in the sheets URL
const doc = new GoogleSpreadsheet(process.env.Spreadsheet_ID);

  creds.client_email = process.env.client_email.replace(/\\n/g, '\n');
  creds.private_key_id = process.env.private_key_id.replace(/\\n/g, '\n');
  creds.private_key = process.env.private_key.replace(/\\n/g, '\n');
  creds.client_id = process.env.client_id.replace(/\\n/g, '\n');
  creds.client_x509_cert_url = process.env.client_x509_cert_url.replace(/\\n/g, '\n');
  creds.project_id = process.env.project_id.replace(/\\n/g, '\n');

async function accessSpreadsheet() {
  await doc.useServiceAccountAuth({
    client_email: creds.client_email,
    private_key: creds.private_key,
  });

}

  module.exports.run = async(bot,message,args) =>{
  if(args[1] =="show" || !args[1]){  
    var guild = message.guild;
    var guildicon = guild.iconURL();
    var usericon = message.author.avatarURL();

  accessSpreadsheet();

  await doc.loadInfo(); // loads document properties and worksheets
  console.log(doc.title);

  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
  console.log(`Title: ${sheet.title} . Rows: ${sheet.rowCount}`);

  const rows = await sheet.getRows();
  //rows.forEach(function(row){
    row = rows[0];
   // console.log(row.Naam);
  
   // console.log(rows[0].Naam);
  var naam = row.Naam; 
  var level = row.LVL;
  var dcID = row.DiscordID;
  const user = ( await guild.members.fetch(row.DiscordID));
  var roles = [];
  roles = user.roles;

 // var roles = user._roles;
  console.log(roles[0]);

//  console.log(rows[1]._rawData[2]);
var botEmbed = new discord.MessageEmbed()
.setTitle("Dit is een zelf geprogrameerde Message Embed")
.setDescription("Deze word gebruikt om zelf informatie te gaan voorzien aan/van gebruikers")
.setColor("#0099ff")
.setThumbnail(guildicon)
.addFields(
  { name: 'gebruiker' , value: `<@${dcID}>`},
  { name: 'Gebruiker', value: `${naam}`},
 // { name: 'User Roles', value: `${roles}`},
  { name: 'level', value: `${level}`},
  )
.setFooter("Deze Embed is geschreven door:"+" "+message.author.username,usericon);

return message.channel.send(botEmbed);
}
else if(args[1] =="add"){

  var guild = message.guild;
  var guildicon = guild.iconURL();
  var usericon = message.author.avatarURL();

  accessSpreadsheet();
  await doc.loadInfo(); // loads document properties and worksheets
  console.log(doc.title);

  let member = message.mentions.members.first();
  
  console.log(`${member}`);

  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]

  var newinfo = [];
  newinfo['0'] = "Test";
  if(args[2]){
    newinfo['0'] = args[2];
    }
 if(args[3]){
    newinfo['1'] = args[3];
    }

  
  
  //newinfo['1'] = "1000";
  newinfo['2'] = "444011622454001664";
 await sheet.addRow(newinfo);


  message.channel.send(`Informatie voor gebruiker ${newinfo['0']}`);


  var botEmbed = new discord.MessageEmbed()
.setTitle("Het toevoegen van de gebruiker aan de spreadsheet is gelukt")
.setDescription("Aan ons spreadsheet is volgende informatie toegevoegd:")
.setColor("#0099ff")
.setThumbnail(guildicon)
.addFields(
  { name: 'Username' , value: `${newinfo['0']}`},
  { name: 'Level', value: `${newinfo['1']}`},
 // { name: 'user Discord roles', value:( user.roles.map(r => `${r}`).join(' | '), true)},
 // { name: 'User Roles', value: `${roles}`},
  )
.setFooter("Met vriendelijke groet:"+" "+"Het admin team Dutch Guardian Angels");

return message.channel.send(botEmbed);
}


else{
  return message.channel.send(`Geen goed commando ${args}`);
}}//)       
        //return message.channel.send(`Info opgezocht over: ${naam}`);


//}

module.exports.help = {
    name: "spreadsheet"
}