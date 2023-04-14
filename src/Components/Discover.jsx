import React from "react";
import { Link } from "react-router-dom";

const Discover = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="mb-5">
        <h1 className="text-3xl font-semibold text-gray-800">Discover</h1>
      </div>

      <div className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth flex snap-x">
        {data.map((item) => {
          console.log(item);
          return (
            <>
              <div
                className="w-[900px] h-[450px] flex justify-center flex-col gap-y-1 mr-5 bg-cover bg-left pr-96 rounded-2xl snap-center"
                key={item.id}
                style={{
                  backgroundImage: `url('https://image.tmdb.org/t/p/w500${item.backdrop_path}')`,
                }}
              >
                <div className="flex flex-col justify-center gap-y-1 bg-gradient-to-r from-gray-900 text-white h-full w-full pl-10 pr-[860px] rounded-tl-2xl rounded-bl-2xl">
                  <Link to={`/${item.id}`}>
                    <p className="">Rating : {item.vote_average}</p>
                    <h1 className="text-3xl font-semibold">{item.title}</h1>
                    <p className="text-md w-40 truncate">{item.overview}</p>
                    <p className="font-semibold text-lg">{item.release_date}</p>
                  </Link>
                </div>
              </div>
              {/* 
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title}
                className="w-full h-[420px] object-contain rounded-2xl mr-10"
              /> */}
            </>
          );
        })}
      </div>
    </>
  );
};

export default Discover;
