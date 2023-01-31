import { EmbedData, EmbedAuthor, EmbedField } from "../types/Embed.ts";
import { DiscordEmbed } from "../../deps.ts";

export class EmbedBuilder {
  constructor(data: EmbedData) {
    this.author = data.author;
    this.color = data.color;
    this.description = data.description;
    this.fields = data.fields;
    this.footer = data.footer;
    this.title = data.title;
    this.timestamp = data.timestamp;
  }

  setColor(color: number): EmbedBuilder {
    this.color = color;
    return this;
  }

  setAuthor(author: EmbedAuthor): EmbedBuilder {
    const { name, iconURL, proxyURL, url } = author;
    this.author = { name, iconURL, proxyURL, url };
    return this;
  }

  setDescription(description: string): EmbedBuilder {
    this.description = description;
  }

  setTitle(title: string): EmbedBuilder {
    this.title = title;
    return this;
  }

  addField(field: EmbedField): EmbedBuilder {
    this.fields.push(field);
    return this;
  }

  addFields(fields: EmbedField[]): EmbedBuilder {
    this.fields.concat(fields);
    return this;
  }

  setFields(fields: EmbedField[]): EmbedBuilder {
    this.fields = fields;
    return this;
  }

  setFooter(footer: EmbedFooter): EmbedBuilder {
    this.footer = footer;
    return this;
  }

  setTimestamp(timestamp: number): EmbedBuilder {
    this.timestamp = timestamp;
    return this;
  }
}
