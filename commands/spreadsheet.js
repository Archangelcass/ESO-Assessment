const discord = require("discord.js");

const { GoogleSpreadsheet } = require('google-spreadsheet');

const doc = new GoogleSpreadsheet('1CbuRYQIrwCGrVBWQ_MxONIuaQkHkb2MHp6vLu04alAY');



//const creds = require('./client_secret.json');

  module.exports.run = async(bot,message,args) =>{

    console.log(process.env.client_email);
    console.log(process.env.private_key);
    
    await doc.useServiceAccountAuth({
        client_email: process.env.client_email,
        private_key: process.env.private_key.replace(/\\n/g, '\n'),
      });
      

    await doc.loadInfo(); // loads document properties and worksheets
    console.log(doc.title);
    console.log(`Title: ${sheet.title}, Rows: ${sheet.rowCount}`)

  /*  const doc = new GoogleSpreadsheet('');
    await promisify(doc.useServiceAccountAuth)(creds);
    const info = await promisify(doc.getInfo)();
    const sheet = info.worksheets[0];
    
*/


}

module.exports.help = {
    name: "spreadsheet"
}