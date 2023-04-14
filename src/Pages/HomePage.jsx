import React, { Suspense } from "react";
import Item from "../Components/Item";
import { Await, defer, useLoaderData } from "react-router";
import Loading from "../Components/Loading";
import Discover from "../Components/Discover";

const HomePage = () => {
  const { discover } = useLoaderData();

  return (
    <>
      <div className="flex justify-between flex-wrap gap-y-8 mt-10 px-5">
        <Suspense fallback={<Loading />}>
          <Await resolve={discover}>
            {(dataDiscover) => <Item data={dataDiscover} />}
          </Await>
        </Suspense>
      </div>

      {/* <div className="flex items-center relative px-5">
        <Suspense fallback={<Loading />}>
          <Await resolve={discover}>
            {(dataDiscover) => <Discover data={dataDiscover} />}
          </Await>
        </Suspense>
      </div> */}
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

export const loader = async () => {
  return defer({
    discover: discoverLoader(),
  });
};
