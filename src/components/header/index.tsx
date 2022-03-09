import React from "react";
import SearchBar from "../search";

export function Header() {
  return (
    <header className="flex items-center justify-between w-full p-4">
      <div>
        <h1>DIO-Github-app</h1>
      </div>
      <div className="flex max-w-md w-full">
        <SearchBar />
      </div>
    </header>
  );
}

export default Header;
