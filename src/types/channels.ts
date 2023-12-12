export type ChannelOpts = {
  channel_id?: number;
  username?: string;
};

export type ChannelRes = {
  is_live: boolean;
  category_id: string;
  category_name: string;
  live_title: string;
  audi_type: AudienceType;
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
  social_links: SocialLink[];
  started_at: string;
  ended_at: string;
};

export type ViewsOpts = {
  limit?: number;
  cursor?: number;
};

export type ViewsRes = {
  live_title: string;
  total: string;
  nickname: string;
  chatters: Chatters;
};

export type FollowersOpts = ViewsOpts & ChannelFollowers;

export type FollowersRes = {
  total: string;
  follower: Followers[];
  total_page: number;
  cursor: number;
};

export type LiveStreamUrlRes = {
  stream_urls: StreamUrl[];
};

export type ClipsOpts = FollowersOpts & {
  category_id?: string;
  period?: string;
  clip_id?: string;
};

export type ClipsRes = {
  total: number;
  clips_info: ClipsInfo[];
  total_page: number;
  cursor: number;
};

export type SteamsOpts = FollowersOpts &
  Omit<ClipsOpts, "clip_id"> & {
    past_stream_id?: string;
  };

export type StreamsRes = {
  total_pastStreams: number;
  paststreams_info: PaststreamsInfo[];
  total_page: number;
  cursor: number;
};

type SocialLink = {
  type: string;
  url: string;
};

type AudienceType =
  | "CHANNEL_AUDIENCE_TYPE_FAMILYFRIENDLY"
  | "CHANNEL_AUDIENCE_TYPE_TEEN"
  | "CHANNEL_AUDIENCE_TYPE_EIGHTEENPLUS";

type Chatters = {
  live_title: string;
  total: string;
  nickname: string;
  chatters: ChattersByRole;
  custome_roles: Viewers;
};

type ChattersByRole = {
  [key: string]: Viewers;
};

type Viewers = {
  viewers?: string[];
};

type Followers = {
  user_id: string;
  nickname: string;
  profile_pic: string;
  followed_at: string;
};

type ChannelFollowers = {
  direction?: string;
};

type StreamUrl = {
  play_url: string;
  desc: string;
};

type ClipsInfo = {
  streamer_id: string;
  streamer_username: string;
  streamer_nickname: string;
  clip_id: string;
  title: string;
  url: string;
  language: string;
  thumbnail: string;
  category_id: string;
  sub_only: string;
  made_at: string;
  duration: number;
  views: number;
  likes: number;
  comments_number: number;
  maker_username: string;
  maker_nickname: string;
};

type PaststreamsInfo = {
  streamer_id: string;
  streamer_username: string;
  streamer_nickname: string;
  past_stream_id: string;
  title: string;
  url: string;
  language: string;
  thumbnail: string;
  category_id: string;
  sub_only: string;
  duration: number;
  start_at: string;
  end_at: string;
  views: number;
  likes: number;
  comments_number: number;
};
