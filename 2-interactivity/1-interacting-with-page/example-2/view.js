class View {
  constructor() {
    this.mainContainerEl = document.querySelector("#main-container");

    console.log(this.mainContainerEl);
  }

  addParagraph() {
    const newPara = document.createElement("p");
    newPara.textContent =
      "This paragraph has been dynamically added by JavaScript!";
    document.querySelector("#main-container").append(newPara);
  }
}

module.exports = View;
