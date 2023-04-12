import React from "react";

const SimilarMovie = ({ data }) => {
  return (
    <>
    {data.map((item) => {
      return (
        <div className="w-48 h-72 bg-gray-100">
          <img
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            alt={item.title}
            className="w-full h-full object-contain object-center rounded-lg"
          />
        </div>
      );
    })}

    </>
  );
};

export default SimilarMovie;
