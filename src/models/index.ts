export interface IGithubUser {
    id: string;
    avatar_url: string;
    name: string;
    followers: number;
    following: number;
    company: string;
    location: string;
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