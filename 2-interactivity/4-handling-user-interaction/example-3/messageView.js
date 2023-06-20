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
    const text = document.querySelector("#message-input");
    const container = document.querySelector("#main-container");
    const div = document.createElement("div");
    div.id = "message";
    div.textContent = text.value;
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
