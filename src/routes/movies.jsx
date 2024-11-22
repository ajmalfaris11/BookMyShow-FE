import React, { useEffect, useState } from "react";
import MovieCard from "../components/movieCard";

const languages = [
  "Kannada",
  "English",
  "Hindi",
  "Malayalam",
  "Tamil",
  "Telugu",
  "Marathi",
  "Bengali",
  "Gujarati",
  "Japanese",
  "Multi Language",
];

const genres = [
  "Drama",
  "Action",
  "Comedy",
  "Thriller",
  "Crime",
  "Family",
  "Romantic",
  "Adventure",
  "Fantasy",
  "Historical",
  "Musical",
  "Myster",
  "Animation",
  "Devotional",
  "Period",
  "Biography",
  "Horror",
  "Political",
  "Phychological",
  "Sci-Fi",
  "Supernatural",
  "Suspense",
];

const formats = [
  "2D",
  "3D",
  "4DX 3D",
  "IMAX 2D",
  "2D SCREEN X",
  "3D SCREEN X",
  "4DX",
  "IMAX 3D",
  "ICE",
  "ICE 3D",
];

export default function Movies() {
  const [movies, setMovies] = useState([]);

  // Fetch movie data from the backend
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:3000/movies"); // API endpoint
        const data = await response.json();
        setMovies(data); // Assuming the backend sends movies under "movies"
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="flex p-10 bg-slate-100">
      {/* ====== FILTER SECTION ====== */}
      <div className="w-4/5 flex flex-col ">
        <div>
          <h2 className="text-2xl font-bold">Filters</h2>
          <div className="bg-white w-full h-10 mt-5 flex justify-between p-2 px-5 text-sm rounded-t-lg">
            <span className="flex justify-center gap-2">
              <span class="material-symbols-outlined text-slate-500 font-extralight">
                keyboard_arrow_up
              </span>
              <span className="text-red-600">Languages</span>
            </span>

            <span className="text-zinc-700">Clear</span>
          </div>
          <div className="flex flex-wrap gap-2 px-5 pb-5 bg-white rounded-b-lg">
            {languages.map((language) => {
              return (
                <div className="border border-gray-00 text-red-500 px-3 py-1">
                  {" "}
                  {language}{" "}
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-lg bg-white mt-5">
          <div className="w-full h-10  flex justify-between p-2 px-5 text-sm">
            <span className="flex justify-center gap-2">
              <span class="material-symbols-outlined text-slate-500 font-extralight">
                keyboard_arrow_up
              </span>
              <span className="text-red-600">Genres</span>
            </span>
            <span className="text-zinc-700">Clear</span>
          </div>
          <div className="flex flex-wrap gap-2 px-5 pb-5">
            {genres.map((genre) => {
              return (
                <div className="border border-gray-00 text-red-500 px-3 py-1">
                  {" "}
                  {genre}{" "}
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-lg bg-white h-auto mt-5">
          <div className="w-full h-10  flex justify-between p-2 px-5 text-sm">
            <span className="flex justify-center gap-2">
              <span class="material-symbols-outlined text-slate-500 font-extralight">
                keyboard_arrow_up
              </span>
              <span className="text-red-600">Format</span>
            </span>{" "}
            <span className="text-zinc-700">Clear</span>
          </div>
          <div className="flex flex-wrap gap-2 px-5 pb-5">
            {formats.map((format) => {
              return (
                <div className="border border-gray-00 text-red-500 px-3 py-1">
                  {" "}
                  {format}{" "}
                </div>
              );
            })}
          </div>
        </div>
        <button className="border border-red-600 text-red-600 p-1.5 rounded-lg mt-5">
          {" "}
          Browse by Cinemas{" "}
        </button>
      </div>

      <div className="pl-10">
        {/* ====== Movies In Location ====== */}
        <div>
          <h2 className="text-2xl font-bold">Movie In Bengaluru</h2>
          <div className="flex flex-wrap gap-1  py-5">
            {languages.map((language) => {
              return (
                <div className="border border-gray-300 text-red-500 px-5 py-2 rounded-full bg-white text-xs font-medium">
                  {" "}
                  {language}{" "}
                </div>
              );
            })}
          </div>
          <div className="w-full bg-white p-5 rounded-lg flex justify-between items-center my-4">
            <span className="font-bold text-lg">Coming Soon</span>
            <a href="/" className="text-red-700 text-sm">Explore Upcoming Movies&gt; </a>
          </div>
        </div>

        {/* ===== Movies Section ====== */}
        <div className="py-5">
          <div className="flex flex-wrap gap-4 justify-center">
            {movies.map((movie) => {
              return <MovieCard key={movie._id} movie={movie}/>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
