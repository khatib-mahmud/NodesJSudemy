const chalk = require('chalk');
const getNote = require("./note");
const msg = getNote()

console.log("START CODING");
const command = process.argv[1];

console.log(command);