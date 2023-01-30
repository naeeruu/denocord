import { Message } from "../structures/Message.ts";
import { Bot, DiscordMessage } from "../../deps.ts";

export async function message(bot: Bot, message: DiscordMessage) {
  return new Message(bot.client, message);
}
