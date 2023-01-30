import { createBot, EventEmitter, startBot } from "../../deps.ts";
import { ClientOptions } from "../types/Client.ts";
import * as events from "../events/mod.ts";
import * as transformers from "../transformers/mod.ts";

/** Represents a client on Discord */
export class Client extends EventEmitter {
  constructor(options: ClientOptions) {
    super();
    /** whether the bot is ready or not */
    this.available = false;
    /** the set of intents assigned to this client */
    this.intents = options.intents;
    /** presence to be created when the client is ready */
    this.presence = options.presence;
  }

  isReady(): boolean {
    return this.available;
  }

  login(token: string): void {
    if (this.available) return;
    this.raw = createBot({
      token, 
      intents: this.intents.reduce((a, b) => a | b)
    });
    this.raw.client = this;
    this.raw.gateway.manager.createShardOptions.makePresence = () => this.presence;

    for (const [event, data] of Object.entries(events)) {
      this.raw.events[event] = data;
    }

    for (const [transformer, func] of Object.entries(transformers)) {
      this.raw.transformers[transformer] = func;
    }

    startBot(this.raw);
    this.readyTimestamp = Date.now();
  }

  destroy(): Client {
    stopBot(this.raw);
    return this;
  }
}
