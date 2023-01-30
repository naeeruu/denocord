import { ActivityTypes, createBot, GatewayIntents, startBot } from "../deps.ts";

export interface ActivityOptions {
  name: string;
  type: ActivityTypes;
  url?: string;
}

export interface PresenceOptions {
  activities?: ActivityOptions[];
  status?: string;
};

export interface ClientOptions {
  intents: GatewayIntents[];
  presence?: PresenceOptions;
}

export class Client {
  constructor(options: ClientOptions) {
    this.intents = options.intents;
    this.presence = options.presence;
  }

  login(token: string) {
    this.raw = createBot({
      token, 
      intents: this.intents.reduce((a, b) => a | b)
    });
    this.raw.gateway.manager.createShardOptions.makePresence = () => this.presence;

    startBot(this.raw);
  }

  destroy() {
    stopBot(this.raw);
    return this;
  }
}
