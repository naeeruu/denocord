export { EmbedType } from "../../deps.ts";

/** https://discord.com/developers/docs/resources/channel#embed-object-embed-author-structure */
export interface EmbedAuthor {
  /** Name of author */
  name: string;
  /** Url of author icon (only supports http(s) and attachments) */
  iconURL?: string;
  /** A proxied url of author icon */
  proxyURL?: string;
  /** Url of author */
  url?: string;
}

/** https://discord.com/developers/docs/resources/channel#embed-object-embed-footer-structure */
export interface EmbedFooter {
  /** Footer text */
  text: string;
  /** Url of footer icon (only supports http(s) and attachments) */
  iconURL?: string;
  /** A proxied url of footer icon */
  proxyURL?: string;
  /** Url of author */
  url?: string;
}

/** https://discord.com/developers/docs/resources/channel#embed-object-embed-field-structure */
export interface EmbedField {
  /** Name of the field */
  name: string;
  /** Value of the field */
  value: string;
  /** Whether or not this field should display inline */
  inline?: boolean;
}

/** https://discord.com/developers/docs/resources/channel#embed-object-embed-image-structure */
export interface EmbedImage {
  /** Source url of image (only supports http(s) and attachments) */
  url: string;
  /** Height of image */
  height?: number;
  /** Width of image */
  width?: number;
  /** A proxied url of the image */
  proxyURL?: string;
}

export interface EmbedProvider {
  /** Name of provider */
  name?: string;
  /** Url of provider */
  url?: string;
}

/** https://discord.com/developers/docs/resources/channel#embed-object-embed-thumbnail-structure */
export interface EmbedThumbnail extends EmbedImage {}

/** https://discord.com/developers/docs/resources/channel#embed-object-embed-video-structure */
export interface EmbedVideo {
  /** Height of video */
  height?: number;
  /** A proxied url of the video */
  proxyURL?: string;
  /** Source url of video */
  url?: string;
  /** Width of video */
  width?: number;
}

/** 
export interface Embed {
  /** Author information */
  author?: EmbedAuthor;
  /** Color code of the embed */
  color?: number;
  /** Description of embed */
  description?: string;
  /** Fields information */
  fields?: EmbedField[];
  /** Footer information */
  footer?: EmbedFooter;
  /** Image information */
  image?: EmbedImage;
  /** Provider information */
  provider?: EmbedProvider;
  /** Thumbnail information */
  thumbnail?: EmbedThumbnail;
  /** Timestamp of embed content */
  timestamp?: number;
  /** Type of embed (always "rich" for webhook embeds) */
  type?: EmbedTypes;
  /** Video information */
  video?: EmbedVideo;
}
