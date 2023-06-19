const NotesModel = require("./notesModel");
const NotesView = require("./notesView");

const notes = new NotesModel();
notes.addNote("This is an example note");
notes.addNote("This is another example note");
console.log(notes.getNotes());

const view = new NotesView(notes);
view.displayNotes();
