import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Profile from "./pages/profile";
import { GithubContextProvider } from "./contexts/github";

function App() {
  return (
    <GithubContextProvider>
      <div className="flex flex-col min-h-screen gap-16 items-center">
        <div className="max-w-4xl w-full flex flex-col items-center">
          <Header />
        </div>
        <div>
          <Routes>
            <Route path="/profile/:username" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </GithubContextProvider>
  );
}

export default App;
