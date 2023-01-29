import { createBot, startBot } from "../deps.js";

export class Client {
  constructor(options) {
    this.raw = createBot({
      token: options.token, 
      intents: options.intents.reduce((a, b) => a | b)
    });
  }

  spawn() {
    startBot(this.raw);
    return options.token;
  }
}
