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
