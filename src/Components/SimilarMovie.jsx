import React from "react";
import { Link } from "react-router-dom";

const SimilarMovie = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        return (
          <div
            className="w-[16%] h-[300px] bg-gray-100 hover:scale-105 transition-all"
            key={item.id}
          >
            <Link to={`/movie/${item.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title}
                className="w-[100%] h-[300px] object-cover object-center rounded-lg"
              />
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default SimilarMovie;
