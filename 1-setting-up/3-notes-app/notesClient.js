class NotesClient {
  constructor() {}

  loadNotes(successCallback, errorCallback) {
    fetch("http://localhost:3000/notes")
      .then((response) => response.json())
      .then((data) => {
        successCallback(data);
      })
      .catch(() => errorCallback());
  }

  createNote(noteText, callback) {
    fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: noteText }),
    }).then(() => callback());
  }
}

module.exports = NotesClient;
