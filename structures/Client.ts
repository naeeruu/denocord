import { createBot, startBot } from "../deps.ts";
import { ClientOptions } from "../types/Client.ts";

export class Client {
  constructor(options: ClientOptions) {
    this.intents = options.intents;
    this.presence = options.presence;
  }

  login(token: string): void {
    this.raw = createBot({
      token, 
      intents: this.intents.reduce((a, b) => a | b)
    });
    this.raw.gateway.manager.createShardOptions.makePresence = () => this.presence;

    startBot(this.raw);
  }

  destroy(): Client {
    stopBot(this.raw);
    return this;
  }
}
