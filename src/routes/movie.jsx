import React from "react";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const response = await fetch(
    `http://localhost:3000/movies/${params.movieId}`
  );
  const movie = await response.json();
  return { movie };
}
export default function Movie(props) {
  const { movie } = useLoaderData();
  return (
    <div className="bg-slate-950 text-white h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="rounded-lg">
            <img
              src={movie.thumbnail}
              alt="Movie Poster"
              className="w-full h-auto mb-4 md:mb-0 rounded-xl"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h1 className="text-4xl font-bold">{movie.title}</h1>

            <div className="flex items-center justify-between my-6 py-3 px-5 rounded-lg bg-gray-800">
              <div className="font-bold flex items-center">
                {`⭐ ${movie.rating}`} {`( ${movie.votes} Votes )`}{" "}
                <span className="material-symbols-outlined mt-1">chevron_right</span>
              </div>
              <button className="text-gray-800 hover:bg-gray-100 bg-white font-bold py-2 px-4 rounded-lg ml-4">
                Rate Now
              </button>
            </div>

            <div className="flex items-center mb-4">
              <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                Trailer
              </button>
              <div className="text-gray-400 ml-4">{movie.genre}</div>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-16 mt-4 rounded-lg">
              Book Tickets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
