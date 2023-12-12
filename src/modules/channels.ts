import {
  ChannelOpts,
  ChannelRes,
  ClipsOpts,
  ClipsRes,
  FollowersOpts,
  FollowersRes,
  LiveStreamUrlRes,
  SteamsOpts,
  StreamsRes,
  ViewsOpts,
  ViewsRes,
} from "../types/channels";
import { Client } from "../types/client";
import { RequestConfig } from "../types/requests";

export class Channels {
  private client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  async channel({
    channel_id = undefined,
    username = undefined,
  }: ChannelOpts): Promise<ChannelRes> {
    const data: RequestConfig["data"] = {
      channel_id: Number(channel_id) || undefined,
      username,
    };

    return await this.client.requestEndpoint("channels/id", { data });
  }

  async isLive({
    channel_id = undefined,
    username = undefined,
  }: ChannelOpts): Promise<boolean> {
    const channel: ChannelRes = await this.channel({
      channel_id,
      username,
    });
    return channel.is_live;
  }

  async viewers(
    channel_id: string,
    opts: Partial<ViewsOpts>
  ): Promise<ViewsRes> {
    return await this.client.requestEndpoint(`channels/${channel_id}/viewers`, {
      data: opts,
    });
  }

  async followers(
    channel_id: string,
    opts: Partial<FollowersOpts>
  ): Promise<FollowersRes> {
    return await this.client.requestEndpoint(
      `channels/${channel_id}/followers`,
      { data: opts }
    );
  }

  async liveStreamUrl(channel_id: number): Promise<LiveStreamUrlRes> {
    const data = { channel_id };
    return await this.client.requestEndpoint("livestreamurl", { data });
  }

  async clips(channel_id: number, opts: ClipsOpts): Promise<ClipsRes> {
    const data = { channel_id, opts };

    return await this.client.requestEndpoint("clips", {
      data,
    });
  }

  async streams(channel_id: number, opts: SteamsOpts): Promise<StreamsRes> {
    const data = { channel_id, ...opts };
    return this.client.requestEndpoint("paststreams", { data });
  }
}
