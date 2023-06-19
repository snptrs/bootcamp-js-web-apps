class MessageView {
  constructor() {
    this.buttonEl = document.querySelector("#show-message-button");

    this.buttonEl.addEventListener("click", () => {
      this.displayMessage();
    });
  }

  displayMessage() {
    console.log("Thanks for clicking me!");
    const container = document.querySelector("#main-container");
    const div = document.createElement("div");
    div.id = "message";
    div.textContent = "This message displayed by JavaScript";
    container.append(div);
  }
}

module.exports = MessageView;
