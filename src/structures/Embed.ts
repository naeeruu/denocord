import { EmbedData, EmbedAuthor, EmbedField, EmbedImage, EmbedThumbnail } from "../types/Embed.ts";
import { DiscordEmbed } from "../../deps.ts";

export class EmbedBuilder {
  constructor(data: EmbedData) {
    this.author = data.author;
    this.color = data.color;
    this.description = data.description;
    this.fields = data.fields;
    this.footer = data.footer;
    this.image = data.image;
    this.thumbnail = data.thumbnail;
    this.title = data.title;
    this.timestamp = data.timestamp;
    this.url = data.url;
  }

  /** Sets the color of this embed */
  setColor(color: number): EmbedBuilder {
    this.color = color;
    return this;
  }

  /** Sets the author of this embed */
  setAuthor(author: EmbedAuthor): EmbedBuilder {
    const { name, iconURL, proxyURL, url } = author;
    this.author = { name, iconURL, proxyURL, url };
    return this;
  }

  /** Sets the description of this embed */
  setDescription(description: string): EmbedBuilder {
    this.description = description;
  }

  /** Sets the title of this embed */
  setTitle(title: string): EmbedBuilder {
    this.title = title;
    return this;
  }

  /** Add the embed's fields */
  addField(field: EmbedField): EmbedBuilder {
    this.fields.push(field);
    return this;
  }

  /** Add some embed fields */
  addFields(fields: EmbedField[]): EmbedBuilder {
    this.fields.concat(fields);
    return this;
  }

  /** Sets the embed's fields */
  setFields(fields: EmbedField[]): EmbedBuilder {
    this.fields = fields;
    return this;
  }

  /** Sets the footer of this embed */
  setFooter(footer: EmbedFooter): EmbedBuilder {
    this.footer = footer;
    return this;
  }

  /** Sets the timestamp of this embed */
  setTimestamp(timestamp: number): EmbedBuilder {
    this.timestamp = timestamp;
    return this;
  }

  /** Sets the thumbnail of this embed */
  setThumbnail(url: string): EmbedBuilder {
    this.thumbnail = { url };
    return this;
  }

  /** Sets the image of this embed */
  setImage(url: string): EmbedBuilder {
    this.image = { url };
    return this;
  }

  /** Sets the URL of this embed */
  setURL(url: string): EmbedBuilder {
    this.url = url;
    return this;
  }

  /** Load embed data from the raw embed object */
  static from(raw: DiscordEmbed): EmbedBuilder {
    this.author = { name: raw.author.name, iconURL: raw.author.icon_url, proxyURL: raw.author.proxy_icon_url, url: raw.author.url };
    this.color = raw.color;
    this.description = raw.description;
    this.fields = raw.fields;
    this.footer = { text: raw.footer.text, iconURL: raw.footer.icon_url, proxyURL: raw.footer.proxy_icon_url, url: raw.footer.url };
    this.image = { url: raw.image.url, proxyURL: raw.image.proxy_url, height: raw.image.height, width: raw.image.width };
    this.thumbnail = { url: raw.thumbnail.url, proxyURL: raw.thumbnail.proxy_url, height: raw.thumbnail.height, width: raw.thumbnail.width };
    this.title = raw.title;
    this.timestamp = raw.timestamp;
    this.url = raw.url;
    return this;
  }
}
