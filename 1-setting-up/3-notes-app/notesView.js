class NotesView {
  constructor(model, client) {
    this.client = client;
    this.model = model;
    this.element = document.querySelector("#main-container");
    // console.log(this.element);

    this.submitButtonEl = document.querySelector("#submit");
    this.submitButtonEl.addEventListener("click", () => {
      this.addNote();
      this.displayNotes();
    });
  }

  displayNotesFromAPI() {
    this.client.loadNotes((data) => {
      this.model.setNotes(data);
      this.displayNotes();
    });
  }

  displayNotes() {
    const oldNotes = document.querySelectorAll(".note");
    oldNotes.forEach((note) => {
      note.remove();
    });

    this.model.getNotes().forEach((note) => {
      let div = document.createElement("div");
      div.classList.add("note");
      div.textContent = note;
      this.element.append(div);
    });
  }

  addNote() {
    const inputEl = document.querySelector("#note-input");
    this.model.addNote(inputEl.value);
    inputEl.value = "";
  }
}

module.exports = NotesView;
