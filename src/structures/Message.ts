import { Client } from "./Client.ts";
import { DiscordMessage } from "../../deps.ts";

/** Represents a message on Discord */
export class Message {
  constructor(client: Client, message: DiscordMessage) {
    /** user object of this message sender */
    this.author = message.author;
    /** id of the channel this message was sent */
    this.channelId = message.channel_id;
    /** client handler for this message */
    this.client = client;
    /** message components contained in this message */
    this.components = message.components;
    /** The content of this message */
    this.content = message.content;
    /** The embeds set of this message */
    this.embeds = message.embeds;
    /** id of the guild this message was sent to */
    this.guildId = message.guild_id;
    /** id of this message */
    this.id = message.id;
    /** raw message from the destination of the message being replied to */
    this.referenceMessage = message.reference_message;
    /** whether this message is text to speech or not */
    this.tts = message.tts;
  }

  get reference(): Message {
    if (this.referenceMessage) return new Message(client, this.referenceMessage);
  }
}
