import React from "react";
import { IGithubSearchUser } from "../../models";
import GithubUserSeachCard from "./GithubUserSeachCard";

export interface IDropdwonSearchResults {
    results: IGithubSearchUser[];
}

export function DropdownSearchResults({ results }: IDropdwonSearchResults) {
    return (
        <div className="absolute w-full left-0 top-full mt-2 rounded overflow-hidden bg-white shadow">
          <ul className="flex p-4 flex-col max-h-96 overflow-y-auto">
              {
                  results?.map(user => (
                    <li key={user.id} className="p-2 hover:bg-gray-50 transition">
                        <GithubUserSeachCard user={user} />
                    </li>
                  ))
              }
          </ul>

          <footer className="px-4 p-2 bg-gray-900 text-gray-400 text-center">
              <h4 className="hover:text-gray-300 cursor-pointer">See all results</h4>
          </footer>
      </div>
    )
}

export default DropdownSearchResults;
