const chalk = require("chalk");
const fs = require("fs");

const getNote = ()=> {
  return "Your notess . . .";
};

const addNote = (title, body) =>{
  const notes = loadNotes();
  const duplicateNote = notes.filter( (note)=> {
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

const saveNotes = (notes) =>{
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = ()=> {
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
  const noteToKeep = notes.filter( (note)=> {
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
