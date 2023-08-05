import HttpClient from './HttpClient';

import { IChannel } from '../types/IChannel';
import { IUser, IUsers } from '../types/IUser';
import { ChannelNotFoundError } from './Errors';
import { AxiosError } from 'axios';

type TGetUser = string | number;

export default class Channels extends HttpClient {
  /**
   * Get all information about Channel from Channel Name/Username or Channel ID
   *
   * @param {string | number} channel - Channel Name/Username or Channel ID
   * @returns {IChannel | ChannelNotFoundError} - Channel Data or Error Message
   */
  public async getChannel(channel: TGetUser): Promise<IChannel | ChannelNotFoundError> {
    if (typeof channel !== 'string' && typeof channel !== 'number') {
      throw new TypeError(`Username expect to be type of string or number, instead received type of ${typeof channel}`);
    }

    // @ts-expect-error ts2345
    if (isNaN(channel)) {
      return await this.getChannelByUsername(String(channel));
    } else {
      return await this.getChannelById(Number(channel));
    }
  }

  /**
   * @name getChannelByUsername
   * @param {string} username - Channel Name/Username
   * @returns {IChannel | ChannelNotFoundError} - Channel Data or Error Message
   */
  private async getChannelByUsername(username: string): Promise<IChannel | ChannelNotFoundError> {
    try {
      const { data }: { data: IChannel } = await this.http.post('/channels/id', { username });

      return data;
    } catch (err) {
      console.log(err?.name@)
      return new ChannelNotFoundError(`User with username ${username} not found`);
    }
  }

  /**
   * @name getChannelById
   * @param {number} channel_id - Channel ID
   * @type IChannel
   * @returns {IChannel | ChannelNotFoundError} - Channel Data or Error Message
   */
  private async getChannelById(channel_id: number): Promise<IChannel | ChannelNotFoundError> {
    try {
      const { data }: { data: IChannel } = await this.http.post('/channels/id', { channel_id });

      return data;
    } catch (_err) {
      return new ChannelNotFoundError(`Channel with ID ${channel_id} not found`);
    }
  }

  /**
   * @name getChannelId
   * @param {string} username - Channel Name/Username
   * @returns {string | ChannelNotFoundError} - Channel ID
   */
  public async getChannelId(username: string): Promise<string | ChannelNotFoundError> {
    if (typeof username !== 'string') {
      throw new TypeError(`Username expect to be type of string, instead received type of ${typeof username}`);
    }

    try {
      const { data }: { data: IUsers } = await this.http.post('/getusers', { user: [username] });

      return data.users[0].channel_id;
    } catch (_err) {
      return new ChannelNotFoundError(`Channel with name ${username} not found`);
    }
  }

  public async getChannels(channels: string[]) {
    if (!Array.isArray(channels)) {
      throw new TypeError(
        `Channels expect to be type of array of strings, instead received type of ${typeof channels}`,
      );
    } else if (channels.length > 0 && !channels.every((channel) => typeof channel === 'string')) {
      throw new TypeError(`'Usernames' must be an Array of strings`);
    }

    try {
      const { data }: { data: IUsers } = await this.http.post('/getusers', { user: channels });

      return data;
    } catch (_err) {
      console.error('channels error');
    }
  }
}
