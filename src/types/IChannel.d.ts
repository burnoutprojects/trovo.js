/**
 * @typedef IChannel
 * @prop {boolean} is_live If the channel is currently live streaming. The top channel list is captured for all the live channels. However, channel info is updated in real time. So the channel could go offline when you paginate.
 * @prop {number} category_id The id of the game category.
 * @prop {string} category_name Text name of the category.
 * @prop {string} live_title Current title of the channel.
 * @prop {AUDIENCE_TYPE} audi_type Audience type. One of the three values:“CHANNEL_AUDIENCE_TYPE_FAMILYFRIENDLY”,“CHANNEL_AUDIENCE_TYPE_TEEN”,“CHANNEL_AUDIENCE_TYPE_EIGHTEENPLUS”.
 * @prop {string} language_code Language of the channel in in ISO 2 (2 letter language code).
 * @prop {string} thumbnail URL of the thumbnail. Empty thumbnail means the thumbnail from the previous stream has expired.
 * @prop {number} current_viewers Number of current viewers.
 * @prop {number} followers Number of followers.
 * @prop {string} streamer_info Profile information of the streamer.
 * @prop {string} profile_pic Url of the streamer’s profile picture.
 * @prop {string} channel_url URL of the channel.
 * @prop {string} created_at Timestamp of the streamer creation time.
 * @prop {number} subscriber_num Count of subscribers.
 * @prop {string} username Username of the channel’s streamer. Also the last part of the channel url.
 * @prop {Links} social_links Social media links of the streamer. Sample: {"type": "Instagram", "url": "https://www.instagram.com/iwang88/"}
 * 
    started_at: string;
    ended_at: string;
 */
export interface IChannel {
  is_live: boolean;
  category_id: number;
  category_name: string;
  live_title: string;
  audi_type: AUDIENCE_TYPE;
  language_code: string;
  thumbnail: string;
  current_viewers: number;
  followers: number;
  streamer_info: string;
  profile_pic: string;
  channel_url: string;
  created_at: string;
  subscriber_num: number;
  username: string;
  social_links: Links[];
  started_at: string;
  ended_at: string;
}

export interface IChannelError {
  status: number;
  message: string;
}

enum AUDIENCE_TYPE {
  CHANNEL_AUDIENCE_TYPE_FAMILYFRIENDLY,
  CHANNEL_AUDIENCE_TYPE_TEEN,
  CHANNEL_AUDIENCE_TYPE_EIGHTEENPLUS,
}

/**
 * @typedef Links
 * @prop {string} type Streamer social media name
 * @prop {string} url Streamer social media url
 */
interface Links {
  type: string;
  url: string;
}
