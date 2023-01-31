import { Client, Guild } from "./mod.ts";
export { Collection } from "../../deps.ts";

export class BaseManager {
  constructor(client: Client) {
    this.client = client;
  }

  get cache(): Collection<any, any> {
    return this.cache;
  }

  get client(): Client {
    return this.client;
  }
}

export class GuildManager extends BaseManager {
  constructor(client: Client) {
    super(client);
    this.cache = Collection<string, Guild>;
  }

  leave(guildId: string): Promise<void> {
    const cache = this.cache.get(guildId);
    if (cache) return await bot.helpers.leaveGuild(guildId);
  }
}
