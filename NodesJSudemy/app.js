const chalk = require("chalk");
const getNote = require("./note");
const yargs = require("yargs");
// const msg = getNote();
console.log("START CODING");

const command = process.argv;

// if (command === "add") {
//   console.log("ADDING note done");
// } else if (command === "del") {
//   console.log("removing note");
// }

// console.log(command);
//add, remove, read,list

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "NOte body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("title!!" + argv.title);
    console.log("body" + argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "remove note!!!!",
  handler: function () {
    console.log("Removing notes note!!!!");
  },
});

console.log(yargs.argv);
