import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../search";

export function Header() {
  return (
    <header className="flex flex-col gap-4 md:flex-row items-center justify-between w-full py-4">
      <div>
        <Link to={"/"}>
          <h1 className="text-gray-800 uppercase font-bold">Github-users-repos</h1>
        </Link>
      </div>
      <div className="flex max-w-md w-full">
        <SearchBar />
      </div>
    </header>
  );
}

export default Header;
