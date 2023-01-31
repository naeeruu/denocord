/** https://discord.com/developers/docs/resources/channel#embed-object-embed-author-structure */
export interface EmbedAuthor {
  /** Name of author */
  name: string;
  /** Url of author icon (only supports http(s) and attachments) */
  iconURL?: string;
  /** A proxied url of author icon */
  proxyIconURL?: string;
  /** Url of author */
  url?: string;
}
