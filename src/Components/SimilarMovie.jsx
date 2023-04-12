import React from "react";
import { Link } from "react-router-dom";

const SimilarMovie = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        return (
          <div className="w-48 h-72 bg-gray-100" key={item.id}>
            <Link to={`/${item.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title}
                className="w-full h-full object-contain object-center rounded-lg"
              />
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default SimilarMovie;
