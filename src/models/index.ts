export interface IGithubUser {
    id: string;
    avatar_url: string;
    name: string;
    followers: number;
    following: number;
    company: string;
    location: string;
    html_url: string;
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

export interface IGithubRepo {
    id: string;
    name: string;
    full_name: string;
    html_url: string;
    description: string;
    created_at: Date;
    language: string;
    license: {
        key: string;
        name: string;
    };
    topics: string[];
    stargazers_count: number;
    forks_count: number;
    watchers: number;
    homepage: string;
}