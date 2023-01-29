import { ActivityTypes, createBot, GatewayIntents, startBot } from "../deps.ts";

export interface ClientActivity {
  name: string;
  type: ActivityTypes;
  url?: string;
}

export interface ClientPresence {
  activities?: ClientActivity[];
  status?: string;
};

export interface ClientOptions {
  token: string;
  intents: GatewayIntents[];
  presence?: ClientPresence;
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
