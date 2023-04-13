import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full px-10 py-5 bg-gray-800 flex justify-center text-xl text-white">
      <h1>
        <Link to={'/'}>PENGKY MOVIE</Link>
      </h1>
    </nav>
  );
};

export default Navbar;
