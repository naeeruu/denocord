import { User } from "../structures/User.ts";
import { Bot, DiscordUser } from "../../deps.ts";

export async function user(bot: Bot, user: DiscordUser) {
  return new User(bot.client, user);
}
