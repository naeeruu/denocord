import { createBot, startBot } from "discordeno/mod.ts";

export class Client {
  constructor(options) {
    this.raw = createBot({
      token: options.token, 
      intents: options.intents.reduce((a, b) => a | b)
    });
  }

  spawn() {
    return startBot(this.raw);
  }
}
