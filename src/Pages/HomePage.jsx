import React from "react";
import Item from "../Components/Item";
import { useLoaderData } from "react-router";

const HomePage = () => {
  const movie = useLoaderData();

  const listMovie = movie.map((item) => {
    return (
      <Item
        title={item.title}
        id={item.id}
        key={item.id}
        img={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
      />
    );
  });


  return (
    <>
      <div className="flex justify-between flex-wrap gap-y-10 mt-10 px-5">
        {listMovie}
      </div>
      <div className="w-full flex justify-end px-5 mb-10">
        <button className="px-5 py-2 bg-gray-200">
          Next page
        </button>
      </div>
    </>
  );
};

export default HomePage;

export const loader = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=542160c3792c7bccea78ba58cf55157a&page`
  );
  const data = await response.json();
  const result = data.results;
  return result;
};
