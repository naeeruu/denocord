import { Message } from "../structures/Message.ts";
import { Bot } from "../../deps.ts";

export async function messageCreate(bot: Bot, message: Message) {
  return bot.client.emit("messageCreate", message);
}
