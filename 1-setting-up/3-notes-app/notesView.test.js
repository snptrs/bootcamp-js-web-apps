/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const NotesView = require("./notesView");
const NotesModel = require("./notesModel");

describe("NotesView", () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
  });

  it("displays notes", () => {
    const model = new NotesModel();
    model.addNote("This is a fascinating note");
    model.addNote("This is a captivating note");
    const view = new NotesView(model);
    view.displayNotes();

    expect(document.querySelectorAll("div.note").length).toBe(2);
    expect(document.querySelector("div.note").textContent).toBe(
      "This is a fascinating note"
    );
  });

  it("clears notes before displaying new ones", () => {
    const model = new NotesModel();
    model.addNote("This is a fascinating note");
    model.addNote("This is a captivating note");
    const view = new NotesView(model);
    view.displayNotes();
    view.displayNotes();

    expect(document.querySelectorAll("div.note").length).toBe(2);
    expect(document.querySelector("div.note").textContent).toBe(
      "This is a fascinating note"
    );
  });

  it("adds a note", () => {
    const model = new NotesModel();
    const view = new NotesView(model);

    const inputFieldEl = document.querySelector("#note-input");
    inputFieldEl.value = "A new note";

    const submitButtonEl = document.querySelector("#submit");
    submitButtonEl.click();

    expect(document.querySelectorAll("div.note").length).toEqual(1);
    expect(document.querySelector("div.note").textContent).toBe("A new note");
  });
});
