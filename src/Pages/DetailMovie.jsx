import React, { Suspense } from "react";
import { Await, defer, useRouteLoaderData } from "react-router";
import DetailItem from "../Components/DetailItemMovie";
import SimilarMovie from "../Components/SimilarMovie";
import Loading from "../Components/Loading";

const DetailMovie = () => {
  const { detail, similar } = useRouteLoaderData("detail-movie");

  return (
    <div className="w-full px-10 space-y-10 ">
      <Suspense fallback={<Loading />}>
        <Await resolve={detail}>
          {(dataMovie) => <DetailItem data={dataMovie} />}
        </Await>
      </Suspense>

      <div className="w-full flex justify-between flex-wrap gap-y-5">
        <Suspense fallback={<Loading className={"text-[30px]"} />}>
          <Await resolve={similar}>
            {(similarMovie) => <SimilarMovie data={similarMovie} />}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default DetailMovie;

const loadDetail = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=542160c3792c7bccea78ba58cf55157a`
  );
  const data = await response.json();
  return data;
};

const similarMovie = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=542160c3792c7bccea78ba58cf55157a`
  );
  const data = await response.json();
  return data.results;
};

export const loader = ({ params }) => {
  const id = params.movieId;

  return defer({
    detail: loadDetail(id),
    similar: similarMovie(id),
  });
};
