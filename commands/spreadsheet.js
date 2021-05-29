const discord = require("discord.js");

const GoogleSpreadsheet = require('google-spreadsheet');
const { promisify } = require('util');

var creds = require('../client_secret.json');

  creds.client_email = process.env.client_email.replace(/\\n/g, '\n');
  creds.private_key_id = process.env.private_key_id.replace(/\\n/g, '\n');
  creds.private_key = process.env.private_key.replace(/\\n/g, '\n');
  creds.client_id = process.env.client_id.replace(/\\n/g, '\n');
  creds.client_x509_cert_url = process.env.client_x509_cert_url.replace(/\\n/g, '\n');
  creds.project_id = process.env.project_id.replace(/\\n/g, '\n');

async function accessSpreadsheet(){
  
const doc = new GoogleSpreadsheet('1CbuRYQIrwCGrVBWQ_MxONIuaQkHkb2MHp6vLu04alAY'); 
await promisify(doc.useServiceAccountAuth)(creds);
const info = await promisify(doc.getInfo)();
const sheet = info.worksheetsp[0];
console.log(`Title: ${sheet.title} . Rows: ${sheet.rowcCount}`);
    
}



//const creds = require('./client_secret.json');

  module.exports.run = async(bot,message,args) =>{

  accessSpreadsheet();

 /*   console.log(process.env.client_email);
    console.log(process.env.private_key);
    
    await doc.useServiceAccountAuth({
        client_email: process.env.client_email,
        private_key: process.env.private_key.replace(/\\n/g, '\n'),
      });
      

    await doc.loadInfo(); // loads document properties and worksheets
    console.log(doc.title);
*/

    console.log(creds);
    return message.channel.send("Hallo jij bekeek de spreadsheet:"+" "+doc.title);


}

module.exports.help = {
    name: "spreadsheet"
}