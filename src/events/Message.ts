import { Message } from "../structures/Message.ts";
import { Bot, RawMessage } from "../../deps.ts";

export async function message(bot: Bot, message: RawMessage) {
  return bot.client.emit("messageCreate", new Message(bot.client, message));
}
