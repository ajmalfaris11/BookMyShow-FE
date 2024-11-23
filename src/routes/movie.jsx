import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../components/header";

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
    <>
      <Header />
      <div
        className="relative text-white bg-custom-image bg-cover bg-center"
        style={{ height: "calc(100vh - 40px)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>

        <div className="container mx-auto px-4 py-16 h-full flex w-full relative z-10">
          <div className="flex flex-col md:flex-row items-center w-full">
            <div>
              <img
                src={movie.thumbnail}
                alt="Movie Poster"
                className="w-64 h-auto rounded-t-xl"
              />
              <div className="flex bg-black p-1 text-xs font-semibold justify-center rounded-b-xl">
                In cinemas
              </div>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h1 className="text-4xl font-bold">{movie.title}</h1>

              <div className="flex items-center justify-between my-6 py-3 px-5 rounded-lg bg-gray-800">
                <div className="font-bold flex items-center">
                  {`⭐ ${movie.rating}`} {`( ${movie.votes} Votes )`}{" "}
                  <span class="material-symbols-outlined mt-1">
                    chevron_right
                  </span>
                </div>
                <button className="text-gray-800 hover:bg-gray-100 bg-white font-bold py-2 px-4 rounded-lg ml-4">
                  Rate Now
                </button>
              </div>

              <div className="flex items-center mb-4 gap-2">
                <button className="text-gray-800 hover:bg-gray-100 bg-white font-bold py-1 px-4 rounded">
                  2D
                </button>
                <button className="text-gray-800 hover:bg-gray-100 bg-white font-bold py-1 px-4 rounded">
                  IMAX
                </button>
                <button className="text-gray-800 hover:bg-gray-100 bg-white font-bold py-1 px-4 rounded">
                  4D
                </button>
              </div>
              <div className="my-2">
                {`2h 11m  •  ${movie.genre} •  UA  • 11 Nov, 2024`}
              </div>
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-16 mt-4 rounded-lg">
                Book Tickets
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ====== About The Movie Section */}
      <div className="p-10">
        <h2 className="font-bold text-2xl mb-4">About The movie</h2>
        <p>{movie.discription}</p>
      </div>
    </>
  );
}
