import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [genreMovie, setGenreMovie] = useState([]);
  const [genreTv, setGenreTv] = useState([]);

  const genresMovie = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=542160c3792c7bccea78ba58cf55157a`
    );
    const data = await response.json();
    setGenreMovie(data.genres);
  };
  const genresTv = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/tv/list?api_key=542160c3792c7bccea78ba58cf55157a`
    );
    const data = await response.json();
    setGenreTv(data.genres);
  };

  useEffect(() => {
    genresMovie();
    genresTv();
  }, []);

  const listGenreMovie = genreMovie.map((item) => {
    return (
      <li
        value={item.name}
        className="text-white text-sm hover:text-red-400"
        key={item.id}
      >
        <Link to={`genre/movie/${item.id}`}>{item.name}</Link>
      </li>
    );
  });

  const listGenreTv = genreTv.map((item) => {
    return (
      <li
        value={item.name}
        className="text-white text-sm hover:text-red-400"
        key={item.id}
      >
        <Link to={`genre/tv/${item.id}`}>{item.name}</Link>
      </li>
    );
  });

  const [openMovie, setOpenMovie] = useState(false);
  const [openTv, setOpenTv] = useState(false);
  const genreMovieHandler = () => {
    setOpenTv(false);
    setOpenMovie(!openMovie);
  };
  const genreTvHandler = () => {
    setOpenMovie(false);
    setOpenTv(!openTv);
  };
  const closeGenrehandler = () => {
    setGenreMovie(false);
    setGenreTv(false);
  };

  return (
    <>
      <nav className="w-full py-3 bg-gray-800 flex flex-col justify-between items-center px-5 text-xl text-white mb-8">
        <div className="w-full flex gap-x-5 items-center">
          <h1
            className="hover:tracking-widest transition-all font-semibold"
            onClick={closeGenrehandler}
          >
            <Link to={"/"}>PNGKY MOVIE</Link>
          </h1>
          <button className="text-base" onClick={genreMovieHandler}>
            Genre Movie
          </button>
          <button className="text-base" onClick={genreTvHandler}>
            Genre Tv
          </button>
        </div>

        {openMovie && (
          <div className="w-full mt-3">
            <ul className="text-gray-800 flex gap-x-3 flex-wrap justify-center">
              {listGenreMovie}
            </ul>
          </div>
        )}
        {openTv && (
          <div className="w-full mt-3">
            <ul className="text-gray-800 flex gap-x-3 flex-wrap justify-center">
              {listGenreTv}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
