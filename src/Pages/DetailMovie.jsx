import React from "react";
import { useLoaderData, useParams } from "react-router";
import DetailItem from "../Components/DetailItem";

const DetailMovie = () => {
  const data = useLoaderData();
  console.log(data)
  return (
    <div>
      <DetailItem data={data}/>
    </div>
  );
};

export default DetailMovie;

export const loader = async ({ params }) => {
  const id = params.movieId;

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=542160c3792c7bccea78ba58cf55157a`
  );
  const data = await response.json();
  return data;
};
