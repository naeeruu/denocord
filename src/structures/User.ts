import { Client } from "./Client.ts";
import { DiscordUser } from "../../deps.ts";

export class User {
  constructor(client: Client, user: DiscordUser) {
    /** the user's banner color encoded as an integer representation of hexadecimal color code */
    this.accentColor = user.accent_color;
    /** The user's avatar hash */
    this.avatar = user.avatar;
    /** Whether the user belongs to an OAuth2 application */
    this.bot = user.bot;
    /** client that handles this object */
    this.client = client;
    /** The user's 4-digit discord-tag */
    this.discriminator = user.discriminator;
    /** The flags that exist in the user account */
    this.flags = user.flags;
    /** The user's id */
    this.id = user.id;
    /** User selected language */
    this.locale = user.locale;
    /** Whether the user has two factor enabled on their account */
    this.mfa = user.mfa_enabled;
    /** The type of Nitro subscription on a user's account */
    this.premiumType = user.premium_types;
    /** The public flags on a user's account */
    this.publicFlags = user.public_flags;
    /** Whether the user is an Official Discord System user (part of the urgent message system) */
    this.system = user.system;
    /** account's owner username */
    this.username = user.username;
  }
}
