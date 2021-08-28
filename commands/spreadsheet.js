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

  accessSpreadsheet();

  await doc.loadInfo(); // loads document properties and worksheets

  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
  const rows = await sheet.getRows();
  
    row = rows[0];
  
    console.log(row.username);

return;
}
return;
  }

module.exports.help = {
    name: "spreadsheet"
}