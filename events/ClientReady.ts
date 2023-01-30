import { Bot, DiscordReady, User } from "../deps.ts";

export async function ready(bot: Bot, payload: { shardId: number; v: number; user: User; guilds: bigint[]; sessionId: string; shard?: number[]; applicationId: bigint; }, rawPayload: DiscordReady) {
  const data = { shardId: payload.shardId, shards: payload.shard, client: bot.client };
  return bot.client.emit("ready", data);
};
