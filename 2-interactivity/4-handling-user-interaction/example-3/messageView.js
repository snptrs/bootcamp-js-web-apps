class MessageView {
  constructor() {
    this.buttonEl = document.querySelector("#show-message-button");
    this.buttonEl.addEventListener("click", () => {
      this.displayMessage();
    });

    this.removeButtonEl = document.querySelector("#hide-message-button");
    this.removeButtonEl.addEventListener("click", () => {
      this.removeMessage();
    });
  }

  displayMessage() {
    const container = document.querySelector("#main-container");
    const div = document.createElement("div");
    div.id = "message";
    div.textContent = "This message displayed by JavaScript";
    container.append(div);
  }

  removeMessage() {
    const messages = document.querySelectorAll("#message");
    messages.forEach((el) => {
      el.remove();
    });
  }
}

module.exports = MessageView;
