class NotesView {
  constructor(notes) {
    this.notes = notes;
    this.mainContainer = document.querySelector("#main-container");
  }

  displayNotes() {
    this.notes.getNotes().forEach((note) => {
      let div = document.createElement("div");
      div.classList.add("note");
      div.textContent = note;
      this.mainContainer.append(div);
    });
  }
}

module.exports = NotesView;
