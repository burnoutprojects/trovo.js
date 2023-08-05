export interface IUsers {
    total: number;
    users: IUser[] | []
}

export interface IUser {
    user_id: string;
    username: string;
    nickname: string;
    channel_id: string;
}