import React from "react";
import { Link } from "react-router-dom";

const DetailItem = ({ data }) => {
  console.log(data);

  return (
    <>
      <div className="w-full">
        {/* layer 1 */}
        <div className="w-full flex">
          {/* image */}
          <div className="w-[25%] mr-10 h-[500px] rounded-xl overflow-hidden relative">
            <img
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              alt=""
              className="w-full h-full object-cover object-center"
            />
            <div className="w-14 h-14 bg-yellow-300 text-black absolute top-0 right-0 grid place-items-center font-semibold rounded-bl-xl">
              {data.vote_average}
            </div>
          </div>

          {/* description */}
          <div className="flex justify-center flex-col gap-y-2 w-[60%] text-gray-800">
            <p className="">Status : {data.status}</p>
            <h1 className="text-5xl font-semibold">{data.name}</h1>
            <p className="text-md">{data.overview}</p>
            <div className="flex gap-x-5">
              <p className="font-semibold text-lg">
                First eps : {data.first_air_date}
              </p>
              <p className="font-semibold text-lg">
                Last eps : {data.last_air_date}
              </p>
            </div>
            <div className="flex gap-x-5 font-semibold">
              {data.genres.map((item) => {
                return (
                  <p
                    key={item.id}
                    className="hover:scale-105 transition-all hover:text-red-400"
                  >
                    <Link to={`/genre/${item.id}`}>{item.name}</Link>
                  </p>
                );
              })}
            </div>
            <p className="">
              Season {data.number_of_seasons} count eps : {data.number_of_episodes}
            </p>
            <p className="">Tagline : {data.tagline}</p>
            <a
              href={data.homepage}
              target="_blank"
              className="hover:text-yellow-400 transition-all"
            >
              More Information?
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailItem;
