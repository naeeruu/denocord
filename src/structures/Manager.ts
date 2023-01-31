import { Client } from "./Client.ts";

export class BaseManager {
  constructor(client: Client) {
    this.client = client;
  }
}
