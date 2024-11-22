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
            <span className="text-red-600">^ Languages</span>
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
            <span className="text-red-600">^ Genres </span>
            <span className="text-zinc-700">Clear</span>
          </div>
          <div className="flex flex-wrap gap-2 px-5 pb-5 bg-white">
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

      </div>
      <div>
        {/* ====== Movies In Location ====== */}
        <div>
          <h2>Location based </h2>
        </div>

        {/* ===== Movies Section ====== */}
        <div className="p-4">
          <div className="flex flex-wrap gap-8 justify-center">
            {movies.map((movie) => {
              return <MovieCard key={movie._id} movie={movie} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
