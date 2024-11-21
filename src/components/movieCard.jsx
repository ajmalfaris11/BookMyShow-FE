import React from "react";

export default function MovieCard({ movie }) {
  return (
    <div key={movie.id} className="w-48 bg-white  overflow-hidden relative">
      <div className="overflow-hidden rounded-xl">
        {movie.isPromoted && (
          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
            PROMOTED
          </div>
        )}
        <img
          src={movie.thumbnail}
          alt={movie.title}
          className="w-full h-50 object-cover"
        />
        <div className="flex items-center justify-between p-2 bg-black">
          <span className="text-xs text-white">👍 {movie.likes} Likes</span>
          {movie.rating && (
            <span className="text-xs text-white">⭐ {movie.rating}/10</span>
          )}
        </div>
      </div>
      <div className="pt-2">
        <h3 className="text-lg font-semibold">{movie.title}</h3>
        <p className="text-base text-gray-500">{movie.genre}</p>
      </div>
    </div>
  );
}
