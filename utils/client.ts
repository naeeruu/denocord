import { createBot, GatewayIntents, startBot } from "../deps.ts";

export interface ClientOptions {
  token: string;
  intents: GatewayIntents[];
}

export class Client {
  constructor(options: ClientOptions) {
    this.raw = createBot({
      token: options.token, 
      intents: options.intents.reduce((a, b) => a | b)
    });
  }

  spawn() {
    return startBot(this.raw);
  }
}
