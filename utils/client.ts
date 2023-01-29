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
    const raw = createBot({
      token: options.token, 
      intents: options.intents.reduce((a, b) => a | b)
    });

    if (options.presence) {
      const { activities, status } = options.presence;
      raw.gateway.manager.createShardOptions = () => ({ activities, status });
    }

    this.raw = raw;
  }

  spawn() {
    return startBot(this.raw);
  }
}
