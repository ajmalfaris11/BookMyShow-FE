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
    <>
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

        <div className="w-full bg-white p-5 rounded-lg flex justify-between items-center my-4">
            <span className="font-bold text-lg">Coming Soon</span>
            <a href="/" className="text-red-700 text-sm">Explore Upcoming Movies&gt; </a>
        </div>

        <div className="py-5">
          <div className="flex flex-wrap gap-4 justify-center">
            {movies.map((movie) => {
              return <MovieCard key={movie._id} movie={movie}/>;
            })}
          </div>
        </div>
      </div>
    </div>
    {/* ----- ROUTER LINKS ----- */}
    <div className="w-full bg-white p-3  flex justify-start items-start gap-2 text-slate-700">
      <a href="/home">Home</a>  → <a href="/movie">Movie</a>
    </div>

    <div className="p-6 bg-gray-100 text-gray-800">
      {/* Section: Online Ticket Booking */}
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2 text-gray-600">
          Enjoy Online Ticket Booking for Movies in Bengaluru With BookMyShow
        </h2>
        <p className="text-sm text-gray-500">
          If you are planning for movie ticket bookings for the latest movies in Mumbai, don't look any further. Now it is
          easy to get on with online ticket booking with BookMyShow. Your one-stop solution for movies to watch this
          weekend. Everyone enjoys watching their favorite movies on the big screen, and the excitement of watching it with
          friends is unparalleled. If you have been eagerly waiting for a movie that you can watch with your friends and
          family, now you know where to get the tickets from. When you watch a film in a cinema theatre, you get to watch it
          on a massive screen with surround-sound, and that enhances your movie-watching experience. Thus, allowing you to
          be a part of the actual movie. Get to know about all movies and movie trailers to watch here. Also, know how to
          book movie tickets.
        </p>
      </div>

      {/* Section: Latest Movies */}
      <div className="mb-4">
      <h2 className="text-lg font-bold mb-2 text-gray-600">
      Latest Movies To Watch in Bengaluru With Family And Friends
        </h2>
        <p className="text-sm text-gray-500">
          Each year the cinema world is enlightened with the latest movie trailers, increasing the excitement among
          everyone. This year, just like the previous year, you have been waiting for some of the biggest Bollywood movies
          to be released with the biggest star cast. Enjoy your favourite movie, not just with your friends, but in a cinema
          hall Mumbai that will be filled with like-minded people. Be a part of everyone's reaction. Dates are already
          announced, and all you need to do is book the tickets for the preferred date so that you don't end up missing the
          first-day first show! Don’t worry we have the list of shows near you and movie showtimes.
        </p>
      </div>

      {/* Section: Upcoming Movies */}
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2 text-gray-600">
          Upcoming Bollywood & Hollywood Movies That You Can’t Miss
        </h2>
        <p className="text-sm text-gray-500">
          Have you checked out the latest movie reviews of some of the best Hollywood movies? If so, we bet you would want
          to watch them all in the nearest movie theatre! With the anticipation of the release of <span className="text-red-500">Kal Ho Naa Ho</span> &
          <span className="text-red-500"> Amaran</span>, who would like to miss the first-day first show experience? The Hollywood movies running in cinemas now
          are already making the audience want for more, and with the new releases happening in the coming months, we
          recommend booking the tickets now in Mumbai. Check out all the latest movie trailers here!
        </p>
      </div>

      {/* Section: Tollywood & Kollywood */}
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2 text-gray-600">
          Exciting Tollywood & Kollywood Movies To Book Tickets
        </h2>
        <p className="text-sm text-gray-500">
          Just like <span className="text-red-500">Bollywood</span> and <span className="text-red-500">Hollywood movies</span>, <span className="text-red-500">Tollywood</span> seems to have a few good movie showtimes as well. You can plan
          for movies to watch this Friday with these Tollywood movies because the star cast is superb, and the storylines of
          these movies have already started making news. It will be super interesting to watch. Keep an eye on the release
          date in Mumbai.
        </p>
      </div>

      {/* Section: Joy of Movie Tickets */}
      <div>
        <h2 className="text-lg font-bold mb-2 text-gray-600">
          The Joy Of Movie Tickets Bookings with Just a Few Clicks
        </h2>
        <p className="text-sm text-gray-500 mb-5">
          Grab on your popcorn because there are many movies to watch today in Mumbai. If you want to save some money, don't
          miss out on our movie offers and discounts. Check out the movies running in cinemas time, and call all your
          friends to enjoy the best movie-watching experience together. There are many big releases in the pipeline, and it
          is expected that these movies will have the perfect casting and direction. Get ready for upcoming movies in
          theatres.
        </p>
        <p className="text-sm text-gray-500">
          Don't wait anymore and book your movie tickets from BookMyShow today at the best price! Your access to your
          favourite movie in Mumbai is only a click away!
        </p>
      </div>
    </div>
   </>
  );
}
