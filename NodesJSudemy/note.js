const chalk = require("chalk");
const fs = require("fs");

const addNote = (title, body) => {
  const notes = loadNotes();
  // const duplicateNotes = notes.filter((note) => {
  //   return note.title === title;
  // });
  const duplicateNote = notes.find((note) => note.title === title);

  debugger;

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.green.inverse("Note added successfully"));
  } else {
    console.log(chalk.yellow.inverse("No note Added"));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("Your Notes"));
  notes.forEach((n) => {
    console.log(n.title);
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((x) => x.title == title);

  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse("Note not found"));
  }
};
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    // console.log("this is the error", err);
    return [];
  }
};

const removeNote = (title) => {
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
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
