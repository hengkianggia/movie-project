import React from "react";
import { useParams, useRouteLoaderData } from "react-router";
import Item from "../Components/ItemMovie";
import { Form, Link } from "react-router-dom";

const Genre = () => {
  const genre = useRouteLoaderData("genreMovie");
  const param = useParams()
  let data = param.genreId;

  let genreName = "";

  if (data == 10759) {
    genreName = "Action & Adventure";
  }
  if (data == 16) {
    genreName = "Animation";
  }
  if (data == 35) {
    genreName = "Comedy";
  }
  if (data == 80) {
    genreName = "Crime";
  }
  if (data == 99) {
    genreName = "Documentary";
  }
  if (data == 18) {
    genreName = "Drama";
  }
  if (data == 10751) {
    genreName = "Family";
  }
  if (data == 14) {
    genreName = "Fantasy";
  }
  if (data == 10762) {
    genreName = "Kids";
  }
  if (data == 9648) {
    genreName = "Mystery";
  }
  if (data == 10763) {
    genreName = "news";
  }
  if (data == 10764) {
    genreName = "Reality";
  }
  if (data == 10765) {
    genreName = "Sci-Fi & Fantasy";
  }
  if (data == 10766) {
    genreName = "Soap";
  }
  if (data == 10768) {
    genreName = "War & Politics";
  }
  if (data == 10767) {
    genreName = "Talk";
  }
  if (data == 37) {
    genreName = "Western";
  }

  return (
    <div className="flex flex-col items-start">
      <Form className="w-full flex gap-x-5 items-center">
        <h1 className="text-center text-3xl ml-5">Genre : {data && genreName}</h1>
      </Form>
      <div className="flex justify-between flex-wrap gap-y-8 mt-8 px-5">
        <Item data={genre} />
      </div>
      <div className="w-full flex justify-end px-5 mt-5">
        <button
          className="px-5 py-2 bg-gray-800 text-white rounded-full"
        >
          <>Next</>
        </button>
      </div>
    </div>
  );
};

export default Genre;

export const loader = async ({ params }) => {
  const id = params.movieId;

  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=542160c3792c7bccea78ba58cf55157a&with_genres=${id}`
  );

  const data = await response.json();
  const final = data.results;
  return final;
};

// export const action = async ({ params, request }) => {
//   const id = params.genreId;
//   const dataa = request.formData();

//   let page = dataa.get("page");

//   const response = await fetch(
//     `https://api.themoviedb.org/3/discover/movie?api_key=542160c3792c7bccea78ba58cf55157a&with_genres=${id}&page${page}`
//   );

//   const data = await response.json();
//   const final = data.results;
//   return final;
// };
