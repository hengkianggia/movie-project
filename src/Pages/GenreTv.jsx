import React from "react";
import { useParams, useRouteLoaderData } from "react-router";
import { Form, Link } from "react-router-dom";
import ItemTv from "../Components/ItemTv";

const GenreTv = () => {
  const genre = useRouteLoaderData("genreTv");
  const param = useParams();
  let data = param.genreId;

  let genreName = "";

  if (data == 28) {
    genreName = "Action";
  }
  if (data == 12) {
    genreName = "Adventure";
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
  if (data == 36) {
    genreName = "History";
  }
  if (data == 27) {
    genreName = "Horror";
  }
  if (data == 10402) {
    genreName = "Music";
  }
  if (data == 9648) {
    genreName = "Mystery";
  }
  if (data == 10749) {
    genreName = "Romance";
  }
  if (data == 878) {
    genreName = "Science Fiction";
  }
  if (data == 10770) {
    genreName = "TV Movie";
  }
  if (data == 53) {
    genreName = "Thriller";
  }
  if (data == 10752) {
    genreName = "War";
  }
  if (data == 37) {
    genreName = "Western";
  }

  return (
    <div className="flex flex-col items-start">
      <Form className="w-full flex gap-x-5 items-center">
        <h1 className="text-center text-3xl ml-5">
          Genre : {data && genreName}
        </h1>
      </Form>
      <div className="flex justify-between flex-wrap gap-y-8 mt-8 px-5">
        <ItemTv data={genre} />
      </div>
      <div className="w-full flex justify-end px-5 mt-5">
        <button className="px-5 py-2 bg-gray-800 text-white rounded-full">
          <>Next</>
        </button>
      </div>
    </div>
  );
};

export default GenreTv;

export const loader = async ({ params }) => {
  const id = params.tvId;

  const response = await fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=542160c3792c7bccea78ba58cf55157a&with_genres=${id}`
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
