class NotesView {
  constructor(notes) {
    this.notes = notes;
    this.element = document.querySelector("#main-container");
    console.log(this.element);
  }

  displayNotes() {
    this.notes.getNotes().forEach((note) => {
      let div = document.createElement("div");
      div.classList.add("note");
      div.textContent = note;
      this.element.append(div);
    });
  }
}

module.exports = NotesView;
