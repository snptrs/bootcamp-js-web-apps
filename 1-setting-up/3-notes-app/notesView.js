class NotesView {
  constructor(notes) {
    this.notes = notes;
    this.element = document.querySelector("#main-container");
    // console.log(this.element);

    this.submitButtonEl = document.querySelector("#submit");
    this.submitButtonEl.addEventListener("click", () => {
      this.addNote();
      this.displayNotes();
    });
  }

  displayNotes() {
    const oldNotes = document.querySelectorAll(".note");
    oldNotes.forEach((note) => {
      note.remove();
    });

    this.notes.getNotes().forEach((note) => {
      let div = document.createElement("div");
      div.classList.add("note");
      div.textContent = note;
      this.element.append(div);
    });
  }

  addNote() {
    const inputEl = document.querySelector("#note-input");
    this.notes.addNote(inputEl.value);
  }
}

module.exports = NotesView;
