import React, { Suspense } from "react";
import { Await, defer, useRouteLoaderData } from "react-router";
import DetailItem from "../Components/DetailItemTv";
import SimilarTv from "../Components/SimilarTv";
import Loading from "../Components/Loading";

const DetailTv = () => {
  const { detail, similar } = useRouteLoaderData("detail-tv");

  return (
    <div className="w-full px-10 space-y-10 ">
      <Suspense fallback={<Loading />}>
        <Await resolve={detail}>
          {(dataTv) => <DetailItem data={dataTv} />}
        </Await>
      </Suspense>

      <div className="w-full flex justify-between flex-wrap gap-y-5">
        <Suspense fallback={<Loading className={"text-[30px]"} />}>
          <Await resolve={similar}>
            {(similarTv) => <SimilarTv data={similarTv} />}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default DetailTv;

const loadDetail = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=542160c3792c7bccea78ba58cf55157a`
  );
  const data = await response.json();
  return data;
};

const similarTv = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${id}/similar?api_key=542160c3792c7bccea78ba58cf55157a`
  );
  const data = await response.json();
  return data.results;
};

export const loader = ({ params }) => {
  const id = params.tvId;

  return defer({
    detail: loadDetail(id),
    similar: similarTv(id),
  });
};
