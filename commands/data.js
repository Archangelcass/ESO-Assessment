const discord = require("discord.js");

const { google } = require("googleapis.js");


const { GoogleSpreadsheet } = require('google-spreadsheet');
const { promisify } = require('util');

var creds = require('../client_secret.json');

// spreadsheet key is the long id in the sheets URL

 

  creds.client_email = process.env.client_email.replace(/\\n/g, '\n');
  creds.private_key_id = process.env.private_key_id.replace(/\\n/g, '\n');
  creds.private_key = process.env.private_key.replace(/\\n/g, '\n');
  creds.client_id = process.env.client_id.replace(/\\n/g, '\n');
  creds.client_x509_cert_url = process.env.client_x509_cert_url.replace(/\\n/g, '\n');
  creds.project_id = process.env.project_id.replace(/\\n/g, '\n');



  module.exports.run = async(bot,message,args) =>{

    const auth = new google.auth.GoogleAuth({
        keyFile: creds,
        scopes: "https://www.googleapis.com/auth/spreadsheets",
    
    });
    //creeër client:
    const client = await auth.getClient();

    //creeër sheets API
    const googlesheets = google.sheets({version: "v4", auth: client});


    const spreadsheetID = process.env.Spreadsheet_ID;
    //get metadata
    const metaData = await googlesheets.spreadsheets.get({
        auth,
        spreadsheetID, 
    });

    console.log(metaData);

if(args[1] =="show" || !args[1]){  
    
}
  }

//}

module.exports.help = {
    name: "data"
}