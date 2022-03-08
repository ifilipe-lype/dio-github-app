import React from "react";
import SearchBar from "./components/search";

function App() {
  return (
    <div className="flex justify-center">
      <div className="max-w-4xl w-full flex flex-col items-center">
        <header className="flex items-center justify-between w-full p-4">
          <div>
            <h1>DIO-Github-app</h1>
          </div>
          <div className="flex max-w-md w-full">
            <SearchBar />
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
