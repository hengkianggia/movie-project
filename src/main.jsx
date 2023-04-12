import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Pages/Root";
import HomePage, { loader as discoverLoader } from "./Pages/HomePage";
import DetailMovie, { loader as detailMovie } from "./Pages/DetailMovie";
import Genre from "./Pages/Genre";

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
        loader: detailMovie,
      },
      {
        path: "genre/:genreId",
        element: <Genre />,
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
