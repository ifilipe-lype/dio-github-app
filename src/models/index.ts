export interface IGithubUser {
    id: string;
    avatar_url: string;
    name: string;
    followers_count: number;
    following_count: number;
    blog: string;
    email: string;
    bio: string;
    public_repos: number;
    login: string;
    twitter_username: string;
}

export interface IGithubSearchUser{
    id: string;
    login: string;
    avatar_url: string;
    name: string;
}

export interface IProfilePassingState {
    username: string;
}