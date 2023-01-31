import { EmbedData, EmbedAuthor, EmbedField } from "../types/Embed.ts";
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
    this.author = { name, iconURL, proxyURL, url };
    return this;
  }

  setDescription(description: string): Embed {
    this.description = description;
  }

  setTitle(title: string): Embed {
    this.title = title;
    return this;
  }

  addField(field: EmbedField): Embed {
    this.fields.push(field);
    return this;
  }

  addFields(fields: EmbedField[]): Embed {
    this.fields.concat(fields);
    return this;
  }

  setFields(fields: EmbedField[]): Embed {
    this.fields = fields;
    return this;
  }

  setFooter(footer: EmbedFooter): Embed {
    this.footer = footer;
    return this;
  }

  setTimestamp(timestamp: number): Embed {
    this.timestamp = timestamp;
    return this;
  }
}
