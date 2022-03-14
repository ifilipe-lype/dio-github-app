import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Profile from "./pages/profile";
import { GithubContextProvider } from "./contexts/github";

function App() {
  return (
    <GithubContextProvider>
      <div className="flex flex-col min-h-screen gap-16 items-center">
        <div className="app-container">
          <Header />
        </div>
          <Routes>
            <Route path="/profile/:username" element={<Profile />} />
          </Routes>
      </div>
    </GithubContextProvider>
  );
}

export default App;
