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
