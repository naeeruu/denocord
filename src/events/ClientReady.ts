import { Bot, DiscordReady, User } from "../../deps.ts";

export async function ready(bot: Bot, payload: { shardId: number; v: number; user: User; guilds: bigint[]; sessionId: string; shard?: number[]; applicationId: bigint; }, rawPayload: DiscordReady) {
  const { shardId, guilds, shard } = payload;
  return bot.client.emit("ready", ({ client: bot.client, shardId, guilds, shard }));
};
