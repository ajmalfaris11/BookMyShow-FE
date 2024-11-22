import React, { useEffect, useState } from "react";
import MovieCard from "../components/movieCard";




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
