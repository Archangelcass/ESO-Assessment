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

  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]

  const rows = await sheet.getRows();
    row = rows[29];
  
  var naam = row.Naam; 
  var level = row.LVL;
  var Roles = row.Roles;
  const user = ( await guild.members.fetch(row.DiscordID));
  var roles = [];
  roles = user.roles;

  console.log(roles[0]);

var botEmbed = new discord.MessageEmbed()
.setTitle("Dit is een zelf geprogrameerde Message Embed")
.setDescription("Deze word gebruikt om zelf informatie te gaan voorzien over gebruikers")
.setColor("#0099ff")
.setThumbnail(guildicon)
.addFields(
  { name: 'gebruiker' , value: `<@${naam}>`},
  { name: 'User Roles', value: `${roles}`},
  { name: 'level', value: `${level}`},
  )
  .setFooter("Met vriendelijke groet:"+" "+"Het admin team Dutch Guardian Angels");

return message.channel.send(botEmbed);
}
else if(args[1] =="add"){

  var guild = message.guild;
  var guildicon = guild.iconURL();
  var usericon = message.author.avatarURL();

  accessSpreadsheet();
  await doc.loadInfo(); // loads document properties and worksheets
  //console.log(doc.title);

  
   
  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]

  var newinfo = [];
  newinfo['0'] = "Test";
  if(args[2]){
    newinfo['0'] = args[2];
    }
 if(args[3]){
    newinfo['1'] = args[3];
    }

    roles = message.mentions.members.first()._roles;
    var rolenumber = 0;
    var Rolestring = "";
    roles.forEach(function(role){
      role = roles[rolenumber];
      
      if(!rolenumber == 0){Rolestring += '\n'}
      Rolestring += '<@&'
      Rolestring += role;
      Rolestring += '>'
      
     rolenumber++;
    }) 
 if(Rolestring){   newinfo['2'] = Rolestring;  }

 await sheet.addRow(newinfo);


  message.channel.send(`Informatie voor gebruiker ${newinfo['0']}`);


  var botEmbed = new discord.MessageEmbed()
.setTitle("Toevoegen gebruiker aan overzicht is gelukt")
.setDescription("Aan ons spreadsheet is volgende informatie toegevoegd:")
.setColor("#0099ff")
.setThumbnail(guildicon)
.addFields(
  { name: 'Username' , value: `${newinfo['0']}`},
  { name: 'Level', value: `${newinfo['1']}`},
  //{ name: 'Gebruiker heeft de volgende roles:', value: `${Rolestring}`}
  { name: 'Gebruiker heeft de volgende roles:', value: `${newinfo['2']}`},
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