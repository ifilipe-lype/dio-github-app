import React, { FormEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { IGithubSearchUser } from "../../models";
import GithubPublicApi from "../../services";
import DropdownSearchResults from "./DropdownSearchResults";

export function SearchBar() {
  const navigate = useNavigate();

  const [searchType, setSearchType] = useState("users");
  const [searchText, setSearchText] = useState("");

  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false);

  const searchRef = useRef<HTMLInputElement>(null);

  const [githubSearchUsers, setGithubSearchUsers] = useState<
    IGithubSearchUser[]
  >([]);

  const selectResult = (result: IGithubSearchUser) => {
    setShowDropdown(false);
    navigate(`/profile/${result.login}`, { state: { username: result.login }});
  };

  const seachUserOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRef.current?.focus();

    setLoading(true);
    if (searchText) {
      try {
        const { items } = await GithubPublicApi.searchUser(searchText);
        setGithubSearchUsers(items);
      } catch (e) {
        setGithubSearchUsers([]);
      }
    } else {
      setGithubSearchUsers([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    searchRef.current?.addEventListener("focus", (e) => {
      setShowDropdown(true);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {showDropdown && (
        <div
          onClick={() => setShowDropdown(false)}
          className="fixed w-screen h-screen inset-0 -z-1 bg-transparent"
        ></div>
      )}
      <form
        className="relative flex flex-col w-full"
        onSubmit={seachUserOnSubmit}
      >
        <div className="flex w-full border border-gray-50 transition focus-within:border-gray-100 focus-within:bg-gray-100 py-2 px-4 rounded">
          <select
            className="bg-transparent text-gray-500"
            onChange={({ target }) => {
              setSearchType(target.value);
              searchRef.current?.focus();
            }}
          >
            <option value={"users"} className="bg-blue text-transparent">
              users
            </option>
            <option value={"repositories"}>repos</option>
          </select>
          <input
            ref={searchRef}
            className="flex bg-transparent px-4 border-l ml-4 items-center w-full outline-none"
            type="search"
            name="search"
            id="search"
            value={searchText}
            onChange={({ target }) => setSearchText(target.value)}
            placeholder={`search for ${searchType}`}
          />
          <button className="text-gray-400 hover:text-gray-500 cursor-pointer transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        {showDropdown && (
          <DropdownSearchResults
            selectResult={selectResult}
            results={githubSearchUsers}
            loading={loading}
          />
        )}
      </form>
    </>
  );
}

export default SearchBar;
