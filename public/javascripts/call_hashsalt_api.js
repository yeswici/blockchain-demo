//Code for AIHPC cloud to hash the data and salt with SHA256 algo lab

//Usage: node call_hashsalt_api.js data salt

//Useful preps: npm install js-sha256


const args = process.argv;
console.log("args="+args);

var inp = args[2]+args[3]; //hash both data and salt

var sha256 = require('js-sha256');

var out = sha256(inp);

console.log("data_input+salt="+inp);
console.log("hashed="+out);
