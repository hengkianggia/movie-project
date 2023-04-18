import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Pages/Root";
import HomePage, { loader as discoverLoader } from "./Pages/HomePage";
import DetailMovie, { loader as detailMovieLoader } from "./Pages/DetailMovie";
import Genre, { loader as genreLoader } from "./Pages/Genre";
import Trending from "./Pages/Trending";
import HomeTrending, {
  loader as trendingLoader,
} from "./Components/HomeTrending";
import TrendingType, {
  loader as trendingTypeLoader,
} from "./Pages/TrendingType";
import DetailTv, { loader as detailTvLoader } from "./Pages/DetailTv";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <HomePage />,
          loader: discoverLoader,
        },
        {
          path: "movie/:movieId",
          element: <DetailMovie />,
          id: "detail-movie",
          loader: detailMovieLoader,
        },
        {
          path: "tv/:tvId",
          element: <DetailTv />,
          id: "detail-tv",
          loader: detailTvLoader,
        },
        {
          path: "genre/:genreId",
          element: <Genre />,
          id: "genre",
          loader: genreLoader,
        },
        {
          path: "trending",
          element: <Trending />,
          id: "trending",
          loader: trendingLoader,
          children: [
            {
              index: true,
              element: <HomeTrending />,
            },
            {
              path: ":trendingType",
              element: <TrendingType />,
              id: "trending-type",
              loader: trendingTypeLoader,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}>
        <div className="App"></div>
      </RouterProvider>
    </>
  );
}

export default App;
