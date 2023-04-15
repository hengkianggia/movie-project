import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

const Trending = () => {
  return (
    <>
      <div className="w-full px-5 flex flex-col items-center gap-y-8">
        <div className="flex gap-x-3">
          <button className="px-3 py-1 rounded-md bg-gray-800 text-white hover:bg-gray-500 transition-all">
            <Link to={"/trending"}>ALL</Link>
          </button>
          <button className="px-3 py-1 rounded-md bg-gray-800 text-white hover:bg-gray-500 transition-all">
            <Link to={"/trending/tv"}>TV SHOW</Link>
          </button>
          <button className="px-3 py-1 rounded-md bg-gray-800 text-white hover:bg-gray-500 transition-all">
            <Link to={"/trending/movie"}>MOVIE</Link>
          </button>
        </div>

        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Trending;
