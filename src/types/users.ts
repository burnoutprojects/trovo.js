export type UsersRes = {
  total: number;
  users: User[];
};

export type User = {
  user_id: string;
  username: string;
  nickname: string;
  channel_id: string;
};
