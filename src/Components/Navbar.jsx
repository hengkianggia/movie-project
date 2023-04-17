import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [genre, setGenre] = useState([]);

  const genres = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=542160c3792c7bccea78ba58cf55157a`
    );
    const data = await response.json();
    setGenre(data.genres);
  };
  useEffect(() => {
    genres();
  }, []);

  const listGenre = genre.map((item) => {
    return (
      <li value={item.name} className="text-white text-sm hover:text-red-400" key={item.id}>
        <Link to={`genre/${item.id}`}>{item.name}</Link>
      </li>
    );
  });

  return (
    <>
      <nav className="w-full py-3 bg-gray-800 flex flex-col justify-between items-center px-5 text-xl text-white mb-8">
        <h1 className="hover:tracking-widest transition-all">
          <Link to={"/"}>PENGKY MOVIE</Link>
        </h1>
        <div className="w-full mt-3">
          {/* <label htmlFor="genre">Genre : </label> */}
          <ul className="text-gray-800 flex gap-x-3 flex-wrap justify-center">{listGenre}</ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
