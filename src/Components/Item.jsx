import React from "react";
import { Link } from "react-router-dom";

const Item = ({ data }) => {

  return (
    <>
      {data.map((item) => {
        return (
          <div className="w-[19%] hover:scale-105 transition-all" key={item.id}>
            <Link to={`/${item.id}`}>
              <div className="w-full h-96 bg-gray-200 rounded-xl overflow-hidden">
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h1 className="text-center text-lg">{item.title}</h1>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Item;
