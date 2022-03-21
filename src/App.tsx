import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Profile from "./pages/profile";
import { GithubContextProvider } from "./contexts/github";
import Home from "./pages/home";
import Redirect from "./components/redirect";

function App() {
  return (
    <GithubContextProvider>
      <div className="flex flex-col min-h-screen gap-4 lg:gap-12 items-center">
        <div className="app-container">
          <Header />
        </div>
          <Routes>
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Redirect to="/home" />} />
          </Routes>
      </div>
    </GithubContextProvider>
  );
}

export default App;
