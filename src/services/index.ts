import { IGithubSearchUser, IGithubUser } from "../models";

interface ISearchResults {
  total_count: number;
  incomplete_results: false;
  items: IGithubSearchUser[];
}

interface IPaginationFilters {
  page: number;
  per_page: number;
}

const baseURL = "https://api.github.com";

export class GithubPublicApi {
  static async getUserProfile(username: string): Promise<IGithubUser> {
    try {
      const result = await fetch(`${baseURL}/users/${username}`);
      return result.json();
    } catch (e: any) {
      throw e;
    }
  }

  static async searchUser(username: string): Promise<ISearchResults> {
    try {
      const result = await fetch(
        `${baseURL}/search/users?` +
          new URLSearchParams({
            q: username,
          })
      );

      return result.json();
    } catch (e: any) {
      throw e;
    }
  }

  static async getUsersRepos(
    username: string,
    { page, per_page }: IPaginationFilters = { page: 1, per_page: 12 }
  ) {
    try {
      const result = await fetch(
        `${baseURL}/users/${username}/repos?` +
          new URLSearchParams({
            page: `${page}`,
            per_page: `${per_page}`,
          })
      );
      return result.json();
    } catch (e: any) {
      throw e;
    }
  }
}

export default GithubPublicApi;
