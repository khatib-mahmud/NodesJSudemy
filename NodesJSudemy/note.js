const chalk = require("chalk");
const fs = require("fs");

const getNote = function () {
  return "Your notess . . .";
};

const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNote = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNote.length === 0) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.green.inverse("Note added successfully"));
  } else {
    console.log(chalk.yellow.inverse("No note Added"));
  }
  //   console.log(duplicateNote, "DUBLIDFDSJFDF");

  //   if (notes.length) {
  //     console.log(chalk.green.inverse("Note Added Succefully"));
  //   }
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    // console.log("this is the error", err);
    return [];
  }
};

const removeNote = function (title) {
  //   console.log("removing tashhhh", title);
  const notes = loadNotes();
  const noteToKeep = notes.filter(function (note) {
    return note.title !== title;
  });

  if (notes.length > noteToKeep.length) {
    console.log(chalk.green.inverse("Note Removed Succefully"));
    saveNotes(noteToKeep);
  } else {
    console.log(chalk.red.inverse("No Note Found"));
  }
};

module.exports = {
  getNote: getNote,
  addNote: addNote,
  removeNote: removeNote,
};
