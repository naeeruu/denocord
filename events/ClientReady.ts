import { Bot, DiscordReady, User } from "../deps.ts";

export async function ready(bot: Bot, payload: { shardId: number; v: number; user: User; guilds: bigint[]; sessionId: string; shard?: number[]; applicationId: bigint; }, rawPayload: DiscordReady) {
  if (payload.shardId === bot.gateway.lastShardId) {
    bot.client.available = true;
    return bot.client.emit("ready", bot.client);
  }
};
