import { EmbedBuilder } from "../structures/Embed.ts";
import { Bot, DiscordEmbed } from "../../deps.ts";

export async function embed(bot: Bot, raw: DiscordEmbed): EmbedBuilder {
  return EmbedBuilder.from(raw);
}
