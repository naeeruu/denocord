import { Client } from "./Client.ts";
export { Collection } from "../../deps.ts";

export class BaseManager {
  constructor(client: Client) {
    this.client = client;
    this.cache = Collection<any, any>;
  }

  get cache(): Collection<any, any> {
    return this.cache;
  }

  get client(): Client {
    return this.client;
  }
}
