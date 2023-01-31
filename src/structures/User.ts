import { Client } from "./Client.ts";
import { DiscordUser } from "../../deps.ts";

export class User {
  constructor(client: Client, user: DiscordUser) {
    /** the user's banner color encoded as an integer representation of hexadecimal color code */
    this.accentColor = user.accent_color;
    /** client that handles this object */
    this.client = client;
    /** The flags that exist in the user account */
    this.flags = user.flags;
    /** The user's id */
    this.id = user.id;
    /** User selected language */
    this.locale = user.locale;
    /** The type of Nitro subscription on a user's account */
    this.premiumType = user.premium_types;
    /** The public flags on a user's account */
    this.publicFlags = user.public_flags;
    /** account's owner username */
    this.username = user.username;
  }
}
