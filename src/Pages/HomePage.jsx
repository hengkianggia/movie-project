import React, { Suspense } from "react";
import Item from "../Components/Item";
import { Await, defer, useLoaderData } from "react-router";
import Loading from "../Components/Loading";
import Discover from "../Components/Discover";
import Trending from "../Components/Trending";

const HomePage = () => {
  const { discover, trending } = useLoaderData();

  return (
    <>
      <div className="flex flex-col relative px-5">
        <Suspense fallback={<Loading />}>
          <Await resolve={discover}>
            {(dataDiscover) => <Discover data={dataDiscover} />}
          </Await>
        </Suspense>

        <Suspense fallback={<Loading className={"text-[30px]"} />}>
          <Await resolve={trending}>
            {(trendingMovie) => <Trending data={trendingMovie} />}
          </Await>
        </Suspense>
      </div>
    </>
  );
};

export default HomePage;

const discoverLoader = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=542160c3792c7bccea78ba58cf55157a&page`
  );
  const data = await response.json();
  const result = data.results;
  return result;
};

const trendingLoader = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=542160c3792c7bccea78ba58cf55157a&media_type=all&time_window=day`
  );
  const data = await response.json();
  const result = data.results;
  return result;
};

export const loader = async () => {
  return defer({
    discover: discoverLoader(),
    trending: trendingLoader(),
  });
};
