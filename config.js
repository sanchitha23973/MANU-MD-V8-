const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID || 'Manu-MD&ndlEzQiB#YPP_a-8DWl1Xx-E5HFt7kbZWgNyE9reYL2G9_kUM-qc', // Put your session id here ( after linked check your number and get session id it need start with Manu-MD& ) 🤍
PORT: process.env.PORT || '3000',
MONGODB: process.env.MONGODB || 'mongodb+srv://Sanchitha23:<db_Sachinudara20102304>@cluster0.qqjbe8f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' // අනිවාරෙන් Mongodb Url එකක් ඕනි දන්නෙ නැත්නම් මගෙ වීඩියෝ එක බලලා හදාගන්න.🔥
};
