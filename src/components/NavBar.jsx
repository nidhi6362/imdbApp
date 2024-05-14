import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex border space-x-8 items-center pl-3 py-4">
      <img src="movie-logo.png" alt="" className="w-[40px]" />
      <Link to="/" className="text-blue-400">
        Movies
      </Link>
      <Link to="/WatchList" className="text-blue-400">
        WatchList
      </Link>
    </div>
  );
}

export default NavBar;
