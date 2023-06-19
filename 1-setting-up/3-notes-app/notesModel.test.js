const NotesModel = require("./notesModel");

describe("", () => {
  describe(".getNotes", () => {
    it("returns all notes", () => {
      const model = new NotesModel();
      expect(model.getNotes()).toEqual([]);
    });
  });
});
