import React from "react";
import GenreItem from "../Components/GenreItem";
import { useParams, useRouteLoaderData } from "react-router";

const Genre = () => {
  const genre = useRouteLoaderData("genre");

  const dataGenre = genre.map((item) => {
    return (
      <GenreItem
        title={item.title}
        id={item.id}
        key={item.id}
        img={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
      />
    );
  });

  return (
    <div className="flex flex-col items-start">
      <h1 className="text-center mt-5 text-2xl ml-5">genres</h1>
      <div className="flex justify-between flex-wrap gap-y-10 mt-10 px-5">
        {dataGenre}
      </div>
    </div>
  );
};

export default Genre;

export const loader = async ({ params }) => {
  const id = params.genreId;

  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=542160c3792c7bccea78ba58cf55157a&with_genres=${id}`
  );

  const data = await response.json();
  const final = data.results;
  return final;
};
