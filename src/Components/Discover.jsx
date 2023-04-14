import React from "react";

const Discover = ({data}) => {
  console.log(data)
  return (
    <>
      <div className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth flex gap-x-3">
        {data.map((item) => {
          return (
            <>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                alt={item.title}
                className="w-full h-[500px] object-contain object-center rounded-2xl"
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Discover;
