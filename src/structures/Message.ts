import { Client } from "./Client.ts";
import { DiscordMessage } from "../../deps.ts";

export class Message {
  constructor(client: Client, message: DiscordMessage) {
    this.client = client;
    this.id = `${message.id}`.replace("n", "");
    this.author = message.author;
    this.embeds = message.embeds;
    this.components = message.components;
    this.reference = message.reference_message;
    this.tts = message.tts;
  }
}
