const NotesClient = require("./notesClient");

require("jest-fetch-mock").enableMocks();

describe("Notes client class", () => {
  it("calls fetch and loads data", (done) => {
    const client = new NotesClient();

    fetch.mockResponseOnce(
      JSON.stringify({
        content: "Some value",
      })
    );

    client.loadNotes((returnedDataFromApi) => {
      expect(returnedDataFromApi.content).toBe("Some value");

      done();
    });
  });

  it("adds a new note to the notes backend", (done) => {
    const client = new NotesClient();

    fetch.mockResponseOnce(
      JSON.stringify({
        content: "Success",
      })
    );

    const noteText = "Lorem ipsum";

    client.createNote(noteText, (returnedDataFromApi) => {
      expect(returnedDataFromApi.content).toBe("Success");

      done();
    });
  });
});
