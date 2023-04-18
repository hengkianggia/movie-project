import React from "react";
import { Link } from "react-router-dom";

const TvPopular = ({ data }) => {
  return (
    <>
      <div className="mb-5">
        <h1 className="text-3xl font-semibold text-gray-800">
          <Link to={"trending"}>Tv Top Rated</Link>
        </h1>
      </div>

      <div className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth flex snap-x">
        {data.map((item) => {
          // console.log(item.id);
          return (
            <>
              <div
                className="flex mr-3 rounded-xl snap-center bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://image.tmdb.org/t/p/w500${item.poster_path}')`,
                }}
                key={item.id}
              >
                <div className="w-full h-full relative rounded-xl overflow-hidden">
                  <Link to={`/${item.id}`}>
                    <img
                      src={``}
                      alt=""
                      className="w-64 h-96 object-cover object-center"
                    />
                    <div className="grid place-items-center w-10 h-10 absolute bg-yellow-400 top-0 left-0 rounded-br-xl text-[14px] font-semibold">
                      {item.vote_average}
                    </div>
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default TvPopular;
