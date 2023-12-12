import axios from "axios";

import { Channels } from "./modules/channels";
import { Users } from "./modules/users";
import { RequestConfig,RequestHeaders } from "./types/requests";

export default class TrovoClient {
  private apiUrl = "https://open-api.trovo.live/openplatform/";
  private headers: RequestHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  constructor(client_id: string) {
    this.headers["CLIENT-ID"] = client_id;
  }

  users: Users = new Users(this);
  channels: Channels = new Channels(this);

  async requestEndpoint(
    endpoint: string,
    options: Pick<RequestConfig, "data" | "params" | "method">
  ) {
    options.method = options.data ? "post" : "get";
    endpoint = endpoint.startsWith("/") ? endpoint.slice(1) : endpoint;

    const res = await axios
      .request({
        baseURL: this.apiUrl,
        url: endpoint,
        headers: this.headers,
        ...options,
      })
      .catch((err) => console.error(err));

    return res?.data;
  }
}
