const NotesModel = require("./notesModel");

describe("NotesModel", () => {
  describe(".getNotes", () => {
    it("returns all notes", () => {
      const model = new NotesModel();
      expect(model.getNotes()).toEqual([]);
    });
  });

  describe(".addNotes", () => {
    it("adds a note with the given text", () => {
      const model = new NotesModel();
      model.addNote("Buy milk");
      model.addNote("Go to the gym");
      expect(model.getNotes()).toEqual(["Buy milk", "Go to the gym"]);
    });
  });

  describe(".reset", () => {
    it("clears all notes", () => {
      const model = new NotesModel();
      model.addNote("Buy milk");
      model.reset();
      expect(model.getNotes()).toEqual([]);
    });
  });
});
