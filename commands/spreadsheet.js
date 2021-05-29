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
    
    var guild = message.guild;
    var guildicon = guild.iconURL();
    var usericon = message.author.avatarURL();

  accessSpreadsheet();

  await doc.loadInfo(); // loads document properties and worksheets
  console.log(doc.title);

  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
  console.log(`Title: ${sheet.title} . Rows: ${sheet.rowCount}`);

  const rows = await sheet.getRows();
  rows.forEach(function(row){
    console.log(row.Naam);
  
   // console.log(rows[0].Naam);
  var naam = row.Naam; 
  var level = row.LVL;

//  console.log(rows[1]._rawData[2]);
var botEmbed = new discord.MessageEmbed()
.setTitle("Dit is een zelf geprogrameerde Message Embed")
.setDescription("Deze word gebruikt om zelf informatie te gaan voorzien aan/van gebruikers")
.setColor("#0099ff")
.setThumbnail(guildicon)
.addFields(
  { name: 'Gebruiker', value: `${naam}`},
  { name: 'level', value: `${level}`},
  )
.setFooter("Deze Embed is geschreven door:"+" "+message.author.username,usericon);

return message.channel.send(botEmbed);
})       
        //return message.channel.send(`Info opgezocht over: ${naam}`);


}

module.exports.help = {
    name: "spreadsheet"
}