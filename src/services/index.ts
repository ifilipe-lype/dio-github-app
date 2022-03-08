import { IGithubSearchUser } from "../models";

interface ISearchResults {
    total_count: number;
    incomplete_results: false;
    items: IGithubSearchUser[];
}

const baseURL = "https://api.github.com";

export class GithubPublicApi {
    

    static async searchUser(username: string): Promise<ISearchResults> {
        try {
            const result = await fetch(`${baseURL}/search/users?` + new URLSearchParams({
                q: username
            }))

            return result.json()
        } catch (e: any) {
            throw e;
        }
    }
}

export default GithubPublicApi;