import TrovoClient from "../index";

export type Client = Omit<
  TrovoClient,
  "users" | "channel" | "channels" | "categories" | "headers" | "apiUrl"
>;
