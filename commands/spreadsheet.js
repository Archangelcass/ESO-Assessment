const discord = require("discord.js");

const {GoogleSpreadsheet} = require("google-spreadsheet");

const { promisify } = require('util');

//const creds = require('./client_secret.json');
var creds = {
    "type": "service_account",
    "project_id": "eso-assessment",
    "private_key_id": process.env.private_key_id,
    "private_key": process.env.private_key,
    "client_email": process.env.client_email,
    "client_id": process.env.client_id,
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/sheets%40eso-assessment.iam.gserviceaccount.com"
  }

  module.exports.run = async(bot,message,args) =>{

    const doc = new GoogleSpreadsheet('1CbuRYQIrwCGrVBWQ_MxONIuaQkHkb2MHp6vLu04alAY');
    await promisify(doc.useServiceAccountAuth)(creds);
    const info = await promisify(doc.getInfo)();
    const sheet = info.worksheets[0];
    console.log(`Title: ${sheet.title}, Rows: ${sheet.rowCount}`)



}

module.exports.help = {
    name: "spreadsheet"
}