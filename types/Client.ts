import { GatewayIntents } from "../deps.ts";
import { PresenceOptions } from "./Presence.ts";

export interface ClientOptions {
  /** array of intents required by the client */
  intents: GatewayIntents[];
  /** presence created when the bot is ready */
  presence?: PresenceOptions;
}
