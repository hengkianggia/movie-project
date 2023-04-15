import React from "react";
import Item from "./Item";
import { useRouteLoaderData } from "react-router";

const HomeTrending = () => {
  const dataTrending = useRouteLoaderData("trending");

  return (
    <>
      <div className="w-full flex justify-between flex-wrap gap-y-5">
        <Item data={dataTrending} />
      </div>
    </>
  );
};

export default HomeTrending;

export const loader = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=542160c3792c7bccea78ba58cf55157a&media_type=all&time_window=day`
  );
  const data = await response.json();
  const result = data.results;
  return result;
};
