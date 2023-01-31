import { EmbedData, EmbedAuthor } from "../types/Embed.ts";
import { DiscordEmbed } from "../../deps.ts";

export class Embed {
  constructor(data: EmbedData) {
    this.author = data.author;
    this.color = data.color;
    this.description = data.description;
    this.fields = data.fields;
    this.footer = data.footer;
    this.title = data.title;
    this.timestamp = data.timestamp;
  }

  setColor(color: number): Embed {
    this.color = color;
    return this;
  }

  setAuthor(author: EmbedAuthor): Embed {
    const { name, iconURL, proxyURL, url } = author;
    return this.author = { name, iconURL, proxyURL, url };
  }

  setDescription(description: string): Embed {
    this.description = description;
  }
}
