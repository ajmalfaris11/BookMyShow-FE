import React, { useEffect, useState } from "react";
import MovieCard from "../components/movieCard";

export default function Home() {
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
    <>
      {/* ===== Recomended Movies Section ====== */}
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Recommended Movies</h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {movies.map(movie => {
            return <MovieCard key={movie._id} movie={movie} />;
          })}
        </div>
      </div>

      {/*  ===== BANNER SECTION ====== */}

      <div className="w-full py-20 px-10">
        <img
          src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/stream-leadin-web-collection-202210241242.png"
          alt=""
        />
      </div>

      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Recommended Movies</h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {movies.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
}
