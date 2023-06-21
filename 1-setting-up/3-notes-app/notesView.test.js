/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const NotesView = require("./notesView");
const NotesModel = require("./notesModel");
const NotesClient = require("./notesClient");

jest.mock("./notesClient");

describe("NotesView", () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
  });

  it("display notes from API", () => {
    const model = new NotesModel();
    const mockClient = new NotesClient();

    mockClient.loadNotes.mockImplementation((callback) => {
      const data = ["This note is coming from the mock"];
      callback(data);
    });

    const view = new NotesView(model, mockClient);
    view.displayNotesFromAPI();

    expect(document.querySelectorAll("div.note").length).toBe(1);
    expect(document.querySelector("div.note").textContent).toBe(
      "This note is coming from the mock"
    );
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

  it("adds a note to the backend via the API", () => {
    const model = new NotesModel();
    const mockClient = new NotesClient();
    const view = new NotesView(model, mockClient);

    mockClient.createNote.mockImplementation((note, callback) => {
      const data = ["A new note"];
      callback(data);
    });

    mockClient.loadNotes.mockImplementation((callback) => {
      const data = ["A new note"];
      callback(data);
    });

    const inputFieldEl = document.querySelector("#note-input");
    inputFieldEl.value = "A new note";

    const submitButtonEl = document.querySelector("#submit");
    submitButtonEl.click();

    expect(document.querySelectorAll("div.note").length).toEqual(1);
    expect(document.querySelector("div.note").textContent).toBe("A new note");

    expect(inputFieldEl.value).toBe("");
  });
});
