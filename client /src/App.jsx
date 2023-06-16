import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { logo } from "./assets";
import { Home, CreatePost } from "./pages";

const App = () => (
  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-gradient-to-b from-green-200 to-blue-500 sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      </Link>
      <div className="text-white">replica created by peel</div>
      <Link
        to="/create-post"
        className="font-inter font-medium  text-white px-4 py-2 rounded-md"
      >
        Create
      </Link>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full  bg-gradient-to-tl from-red-200 to-blue-100 min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
