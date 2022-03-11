import React from "react";

import { IGithubSearchUser } from "../../models";
import GithubUserSeachCard from "./GithubUserSeachCard";

export interface IDropdwonSearchResults {
  results: IGithubSearchUser[];
  selectResult: (result: IGithubSearchUser) => void;
  loading: boolean;
}

export function DropdownSearchResults({
  results,
  selectResult,
  loading,
}: IDropdwonSearchResults) {

  return (
      <div className="absolute w-full left-0 top-full mt-2 rounded overflow-hidden bg-white shadow">
        <ul className="flex p-4 flex-col max-h-96 overflow-y-auto">
          {loading ? (
            <div className="flex justify-center">
              <svg
              className="animate-spin -ml-1 mr-3 h-6 w-6 text-blue"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            </div>
          ) : results?.length ? (
            results?.map((result) => (
              <li
                onClick={() => selectResult(result)}
                key={result.id}
                className="p-2 hover:bg-gray-50 transition cursor-pointer"
              >
                <GithubUserSeachCard user={result} />
              </li>
            ))
          ) : (
            <h4 className="text-sm text-gray-300 text-center">
              Oops! Nothing to show...
            </h4>
          )}
        </ul>

        {results?.length > 0 && (
          <footer className="px-4 p-2 bg-gray-900 text-gray-400 text-center">
            <h4 className="hover:text-gray-300 cursor-pointer">
              See all results
            </h4>
          </footer>
        )}
      </div>
  )
}

export default DropdownSearchResults;
