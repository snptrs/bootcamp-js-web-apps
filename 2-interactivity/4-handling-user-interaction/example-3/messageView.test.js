/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const MessageView = require("./messageView");

describe("MessageView", () => {
  it("adds a message", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const view = new MessageView();

    const buttonEl = document.querySelector("#show-message-button");
    buttonEl.click();

    expect(document.querySelector("#message")).not.toBeNull();
  });

  it("removes a message", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const view = new MessageView();

    const addButtonEl = document.querySelector("#show-message-button");
    addButtonEl.click();
    expect(document.querySelector("#message")).not.toBeNull();

    const removeButtonEl = document.querySelector("#hide-message-button");
    removeButtonEl.click();
    expect(document.querySelector("#message")).toBeNull();
  });
});
