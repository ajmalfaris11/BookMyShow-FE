import React, { useEffect, useState } from "react";
import MovieCard from "../components/movieCard";

// ===== Filter Datas =====

const dates = ["Today", "Tomorrow", "This Weekend"];

const languages = [
  "English",
  "Hindi",
  "Kannada",
  "Tamil",
  "Malayalam",
  "Bengali",
  "Hinglish",
  "Punjabi",
  "Urdu",
  "Bhojpuri",
  "Marathi",
  "Telugu",
];

const catagories = [
  "Theatre",
  "Strorytelling",
  "Improv Theatre",
  "Puppetry",
  "Experimental",
];

const genres = [
  "Drama",
  "Comedy",
  "Musical",
  "Classic",
  "Contemporary",

  "Adaptation",
  "Romantic",
  "Tragedy",
  "Suspense",
  "Thriller",

  "Mystery",
  "Regional",
  "Adventure",
  "Brodway",
  "Fantasy",

  "Action",
  "Adult",
  "Biography",
  "Horror",
  "Mythological",

  "Period",
  "Political",
  "Psychological",
  "Tribute",
  "War",
];

const moreFilters = [
  "Outdoor Events",
  "Fast Filling",
  "Kids Allowed",
  "Childrens Theatre",
  "Kids Activities",
  "Dance Activities",
  "International Plays",
  "Offers for you",
  "Must Attend",
  "Unmissable Events",
];

const prices = ["Free", "0 - 500", "501- 2000", "Above 2000"];

export default function Plays() {
  return (
    <>
      <div className="flex p-10 bg-slate-100">
        {/* ====== FILTER SECTION ====== */}
        <div className="w-2/6 flex flex-col ">
          <div>
            <h2 className="text-2xl font-bold">Filters</h2>
            <div className="bg-white w-full h-10 mt-5 flex justify-between p-2 px-5 text-sm rounded-t-lg">
              <span className="flex justify-center gap-2">
                <span class="material-symbols-outlined text-slate-500 font-extralight">
                  keyboard_arrow_up
                </span>
                <span className="text-red-600">Date</span>
              </span>

              <span className="text-zinc-700">Clear</span>
            </div>
            <div className="flex flex-wrap gap-2 px-5 pb-5 bg-white rounded-b-lg">
              {dates.map((date) => {
                return (
                  <div className="border border-gray-00 text-red-500 px-3 py-1">
                    {" "}
                    {date}{" "}
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
                <span className="text-red-600">Languages</span>
              </span>
              <span className="text-zinc-700">Clear</span>
            </div>
            <div className="flex flex-wrap gap-2 px-5 pb-5">
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

          <div className="rounded-lg bg-white h-auto mt-5">
            <div className="w-full h-10  flex justify-between p-2 px-5 text-sm">
              <span className="flex justify-center gap-2">
                <span class="material-symbols-outlined text-slate-500 font-extralight">
                  keyboard_arrow_up
                </span>
                <span className="text-red-600">Catagories</span>
              </span>{" "}
              <span className="text-zinc-700">Clear</span>
            </div>
            <div className="flex flex-wrap gap-2 px-5 pb-5">
              {catagories.map((catagory) => {
                return (
                  <div className="border border-gray-00 text-red-500 px-3 py-1">
                    {" "}
                    {catagory}{" "}
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
                <span className="text-red-600">Genres</span>
              </span>{" "}
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
                <span className="text-red-600">More Filters</span>
              </span>{" "}
              <span className="text-zinc-700">Clear</span>
            </div>
            <div className="flex flex-wrap gap-2 px-5 pb-5">
              {moreFilters.map((mFs) => {
                return (
                  <div className="border border-gray-00 text-red-500 px-3 py-1">
                    {" "}
                    {mFs}{" "}
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
                <span className="text-red-600">Price</span>
              </span>{" "}
              <span className="text-zinc-700">Clear</span>
            </div>
            <div className="flex flex-wrap gap-2 px-5 pb-5">
              {prices.map((price) => {
                return (
                  <div className="border border-gray-00 text-red-500 px-3 py-1">
                    {" "}
                    {price}{" "}
                  </div>
                );
              })}
            </div>
          </div>

          <button className="border border-red-600 text-red-600 p-1.5 rounded-lg mt-5">
            {" "}
            Browse by Venues{" "}
          </button>
        </div>

        <div className="pl-8">
          {/* ====== Events In Location ====== */}
          <div>
            <h2 className="text-2xl font-bold">Plays In Bengaluru</h2>
            <div className="flex flex-wrap gap-1  py-5">
              {catagories.map((catagory) => {
                return (
                  <div className="border border-gray-300 text-red-500 px-5 py-2 rounded-full bg-white text-xs font-medium">
                    {" "}
                    {catagory}{" "}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ----- ROUTER LINKS ----- */}
      <div className="w-full bg-white p-3  flex justify-start items-start gap-2 text-slate-700">
        <a href="/home">Home</a> → <a href="/plays">Plays</a>
      </div>

      {/* ====== Footer Deatails Section ===== */}
      <div className="p-6 bg-gray-100 text-gray-800">
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2 text-gray-500">
            Book Tickets for Upcoming Plays in Bengaluru on BookMyShow
          </h2>
          <p className="text-sm text-gray-500">
            Theatre plays offer you the experience to delve into outstanding
            stories staged by talented performers. Well-known artists across
            creative platforms—TV, <span className="text-red-600">movies</span>,
            and <span className="text-red-600">web series</span> perform in
            exciting <span className="font-semibold">theatre plays</span>. If
            you are an avid “Play” lover, BookMyShow brings you complete
            information about the <span className="font-semibold">plays</span>{" "}
            being staged in
            <span className="font-semibold">Bengaluru</span> for you. You can
            find the date, venue, genre, artists, tickets, and every related
            detail on the website. The best part that has enticed the audience’s
            excitement more is the ‘live plays’ option available with us. Now,
            you don’t need to filter and pick the most convenient venue. You can
            watch the show online. For that, you need to buy play tickets, and
            with this, you will be ready to enjoy the play while being at your
            home. Those willing to watch a particular genre of{" "}
            <span className="font-semibold">plays of 2024</span> can apply the
            filter and find the best match.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2 text-gray-500">
            How to Book Tickets for Plays in Your City?
          </h2>
          <p className="text-sm text-gray-500">
            <span className="font-semibold">Theatre play tickets</span> are
            available on BookMyShow’s website. Simply follow the steps given
            below to book your tickets: Start with registration for the booking
            by entering the required details. Fill out the registration form.
            Proceed with the payment. Apply for
            <span className="font-semibold">coupons or gift cards</span> if you
            have any, complete the payment, and collect the{" "}
            <span className="font-semibold">tickets</span>.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2 text-gray-500">
            Play Theatres in Bengaluru
          </h2>
          <p className="text-sm text-gray-500">
            <span className="font-semibold">Theatre</span> gives you a great
            chance to break the monotonous routine. You can select the venue
            that is near your place in{" "}
            <span className="font-semibold">Bengaluru</span>. By booking your
            tickets online, you can fix all your work and find a relaxing time.
            The stories take you to a different place, and sometimes you find
            something relevant to your taste. Theatre plays sometimes surprise
            you, provoke empathy, and make you laugh or cry. If you want to
            experience this, find{" "}
            <span className="font-semibold">upcoming plays near you</span> and
            enjoy them.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2 text-gray-500">
            Top Plays in Bengaluru
          </h2>
          <p className="text-sm text-gray-500">
            <span className="text-red-600">
              Peppa Pig’s Adventure! Live - Bengaluru, Big Fish, Love Triangle,
              RAMAYANA & Life of Galileo by Bertolt Brecht{" "}
            </span>
            These plays are available on the page. Browse the website and go
            through the list of{" "}
            <span className="font-semibold">upcoming plays in Bengaluru</span>.
            You can browse by the language, date, and price range. Interactive
            theatre is another exciting option, where the audience can see their
            stories come alive and that too spontaneously. You will get to enjoy
            your time with the slice of life stories that are based on your
            life. You should consider this interactive theatre, as this is an
            opportunity to see your life staged in front of you.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2 text-gray-500">
            Book Online Tickets at Attractive Rates
          </h2>
          <p className="text-sm text-gray-500 mb-5">
            With <span className="font-semibold">rewards</span> and offers, you
            save on tickets for{" "}
            <span className="font-semibold">plays in Bengaluru</span>. For
            regular customers,{" "}
            <span className="font-semibold">superstar offers</span> are also
            applicable. If a user completes ten transactions with BookMyShow,
            they can use the superstar benefits on tickets for{" "}
            <span className="font-semibold">upcoming plays 2024</span>. Book
            your tickets and enjoy plays with your friends and family. You can
            apply the offers and discount coupons during the payment.
            <br />
            <br /> Theatre plays offer you a chance to enjoy the live experience
            of storytelling. Also, you get to know the fellow audience’s views
            instantly. There are{" "}
            <span className="font-semibold">upcoming plays in 2024</span> that
            have created a lot of buzz. You can check out the reviews and
            discussions as well before you book ickets to select a good{" "}
            <span className="font-semibold">upcoming theatre play</span>.
          </p>
          <p className="text-sm text-gray-500">
            Make sure to <span className="font-semibold">book tickets</span> in
            advance to avoid any last-minute hassle!
          </p>
        </div>
      </div>
    </>
  );
}
