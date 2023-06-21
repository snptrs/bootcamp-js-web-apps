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
});
