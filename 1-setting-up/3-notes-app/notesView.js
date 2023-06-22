class NotesView {
  constructor(model, client) {
    this.client = client;
    this.model = model;
    this.element = document.querySelector("#main-container");
    this.inputEl = document.querySelector("#note-input");

    this.submitButtonEl = document.querySelector("#submit");
    this.submitButtonEl.addEventListener("click", () => {
      this.addNote();
      this.inputEl.value = "";
    });
  }

  displayNotesFromAPI() {
    this.client.loadNotes(
      (data) => {
        this.model.setNotes(data);
        this.displayNotes();
      },
      () => {
        this.displayError();
      }
    );
  }

  displayNotes() {
    const oldNotes = document.querySelectorAll(".note");
    oldNotes.forEach((note) => {
      note.remove();
    });

    const errorMessage = document.querySelectorAll("#error-message");
    errorMessage.forEach((message) => {
      message.remove();
    });

    const newNotes = this.model.getNotes();

    newNotes.forEach((note) => {
      let div = document.createElement("div");
      div.classList.add("note");
      div.textContent = note;
      this.element.append(div);
    });
  }

  displayError() {
    let p = document.createElement("p");
    let mainContainer = document.querySelector("#main-container");
    p.id = "error-message";
    p.textContent = "Ooops, something went wrong!";
    mainContainer.append(p);
  }

  addNote() {
    this.client.createNote(this.inputEl.value, () => {
      this.displayNotesFromAPI();
    });
  }
}

module.exports = NotesView;
