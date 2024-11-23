import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Movies from "./routes/movies";
import Movie, { loader as movieLoader} from "./routes/movie";
import Stream from "./routes/stream";
import Events from "./routes/events";
import Plays from "./routes/plays";
import Activities from "./routes/activities";
import Sports from "./routes/sports";
import Home from "./routes/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      
      {
        index: true, // Default child route
        element: <Navigate to="/home" replace />,
      },

      {
        path: "home",
        element: <Home />,
      },

      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/stream",
        element: <Stream />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/plays",
        element: <Plays />,
      },
      {
        path: "/sports",
        element: <Sports />,
      },
      {
        path: "/activities",
        element: <Activities />,
      },
    ],
    
  },
  {
    path: "/movies/:movieId", // :Id -> request / Url parameter
    element: <Movie />,
    loader: movieLoader
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
