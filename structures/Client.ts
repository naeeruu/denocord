import { createBot, EventEmitter, startBot } from "../deps.ts";
import { ClientOptions } from "../types/Client.ts";

export class Client extends EventEmitter {
  constructor(options: ClientOptions) {
    this.intents = options.intents;
    this.presence = options.presence;
  }

  login(token: string): void {
    this.raw = createBot({
      token, 
      intents: this.intents.reduce((a, b) => a | b)
    });
    this.raw.client = this;
    this.raw.gateway.manager.createShardOptions.makePresence = () => this.presence;

    startBot(this.raw);
  }

  destroy(): Client {
    stopBot(this.raw);
    return this;
  }
}
