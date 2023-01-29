import { ActivityType, createBot, GatewayIntents, startBot } from "../deps.ts";
import * as events from "../events/mod.ts";

export interface ActivityOptions {
  name: string;
  type: ActivityType;
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
    const raw = createBot({
      token: options.token, 
      intents: options.intents.reduce((a, b) => a | b)
    });

    if (options.presence) {
      const { activities, status } = options.presence;
      raw.gateway.manager.createShardOptions = () => ({ activities, status });
    }

    for (const [event, data] of Object.entries(events)) {
      data.client = this;
      this.emit(event, data);
    }

    this.raw = raw;
  }

  spawn() {
    return startBot(this.raw);
  }

  destroy() {
    stopBot(this.raw);
    return this;
  }
}
