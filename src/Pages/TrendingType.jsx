import React from "react";
import Item from "../Components/Item";
import { useRouteLoaderData } from "react-router";

const TrendingType = () => {
  const trendingType = useRouteLoaderData("trending-type");

  return (
    <>
      <div className="w-full flex justify-between flex-wrap gap-y-5">
        <Item data={trendingType} />
      </div>
    </>
  );
};

export default TrendingType;

export const loader = async ({ params }) => {
  const id = params.trendingType;

  const response = await fetch(
    `https://api.themoviedb.org/3/trending/${id}/day?api_key=542160c3792c7bccea78ba58cf55157a&media_type=${id}&time_window=day`
  );
  const data = await response.json();
  const result = data.results;
  return result;
};
