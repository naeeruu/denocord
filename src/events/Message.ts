import { Message } from "../structures/Message.ts";
import { Bot, DiscordMessage } from "../../deps.ts";

export async function message(bot: Bot, message: DiscordMessage) {
  return bot.client.emit("messageCreate", new Message(client, message));
}
