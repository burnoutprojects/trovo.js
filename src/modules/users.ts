import { Client } from "../types/client";
import { UsersRes } from "../types/users";

export class Users {
  private client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  async get(users: string[]): UsersRes {
    const data = { user: users };

    return await this.client.requestEndpoint("/getusers", { data });
  }
}
