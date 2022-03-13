import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../search";

export function Header() {
  return (
    <header className="flex items-center justify-between w-full">
      <div>
        <Link to={"/"}>
          <h1>DIO-Github-app</h1>
        </Link>
      </div>
      <div className="flex max-w-md w-full">
        <SearchBar />
      </div>
    </header>
  );
}

export default Header;
