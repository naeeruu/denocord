import { PresenceOptions } from "./Presence.ts";

/** https://discord.com/developers/docs/topics/gateway#list-of-intents */
export { GatewayIntents } from "../../deps.ts";

export interface ClientOptions {
  /** array of intents required by the client */
  intents: GatewayIntents[];
  /** presence created when the bot is ready */
  presence?: PresenceOptions;
}
