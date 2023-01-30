import { Client } from "./Client.ts";
import { DiscordMessage } from "../../deps.ts";

export class Message {
  constructor(client: Client, message: DiscordMessage) {
    this.author = message.author;
    this.channelId = message.channel_id;
    this.client = client;
    this.components = message.components;
    this.content = message.content;
    this.embeds = message.embeds;
    this.guildId = message.guild_id;
    this.id = message.id;
    this.reference = message.reference_message;
    this.tts = message.tts;
  }
}
