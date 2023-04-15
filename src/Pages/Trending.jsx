import React from "react";
import { Outlet} from "react-router";

const Trending = () => {

  return (
    <>
      <div className="w-full px-5 flex flex-col items-center gap-y-8">
        <div className="flex gap-x-3">
          <button className="px-3 py-1 rounded-md bg-gray-800 text-white hover:bg-gray-500 transition-all">
            ALL
          </button>
          <button className="px-3 py-1 rounded-md bg-gray-800 text-white hover:bg-gray-500 transition-all">
            TV SHOW
          </button>
          <button className="px-3 py-1 rounded-md bg-gray-800 text-white hover:bg-gray-500 transition-all">
            MOVIE
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


