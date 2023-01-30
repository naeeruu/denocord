import { createBot, EventEmitter, startBot } from "../deps.ts";
import { ClientOptions } from "../types/Client.ts";
import * as events from "../events/mod.ts";

export class Client extends EventEmitter {
  constructor(options: ClientOptions) {
    super();
    this.available;
    this.intents = options.intents;
    this.presence = options.presence;
  }

  isReady(): boolean {
    return this.available;
  }

  login(token: string): void {
    this.raw = createBot({
      token, 
      intents: this.intents.reduce((a, b) => a | b)
    });
    this.raw.client = this;
    this.raw.gateway.manager.createShardOptions.makePresence = () => this.presence;

    for (const [event, data] of Object.entries(events)) {
      this.raw.events[event] = data;
    }

    startBot(this.raw);
    this.readyTimestamp = Date.now();
  }

  destroy(): Client {
    stopBot(this.raw);
    return this;
  }
}
