import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Pages/Root";
import HomePage, { loader as discoverLoader } from "./Pages/HomePage";
import DetailMovie, { loader as detailMovie } from "./Pages/DetailMovie";
import Genre, { loader as genreLoader } from "./Pages/Genre";
import Trending from "./Pages/Trending";
import HomeTrending, {
  loader as trendingLoader,
} from "./Components/HomeTrending";

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
        path: ":movieId",
        element: <DetailMovie />,
        id: "detail-movie",
        loader: detailMovie,
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
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
