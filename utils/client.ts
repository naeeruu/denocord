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
  token: string;
  intents: GatewayIntents[];
  presence?: PresenceOptions;
}

export class Client {
  constructor(options: ClientOptions) {
    this.intents = options.intents;
    if (options.presence) {
      const { activities, status } = options.presence;
      raw.gateway.manager.createShardOptions.makePresence = () => ({ activities, status });
    }
  }

  login(token: string) {
    this.raw = createBot({
      token, 
      intents: this.intents.reduce((a, b) => a | b)
    });
    startBot(this.raw);
  }

  destroy() {
    stopBot(this.raw);
    return this;
  }
}
