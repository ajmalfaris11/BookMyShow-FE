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
  "Marathi",
  "Punjabi",
  "Multi Language",
  "Assamese",
  "French",
  "Korean",
  "Urdu",
  "Arabic",
  "Bhojpuri",
  "Gujarati",
  "Hindustani",
  "Italian",
  "Japanese",
  "Odia",
  "Rajasthani",
  "Sankrit",
];

const catagories = [
  "Workshops",
  "Comedy Shows",
  "Music Shows",
  "Meetups",
  "Kids",
  "Perfomances",
  "New Year Parties",
  "Screening",
  "Talks",
  "Exhibitions",
  "Conferences",
  "HoliCelebrations",
  "Spirituality",
];

const moreFilters = [
  "Outdoor Events",
  "Fast Filling",
  "Must Attend",
  "Kids Allowed",
  "Offers for you",
  "World Music",
  "Online Streaming",
];

const prices = ["Free", "0 - 500", "501- 2000", "Above 2000"];

export default function Events() {
  return (
    <>
      <div className="flex p-10 bg-slate-100">
        {/* ====== FILTER SECTION ====== */}
        <div className="w-3/6 flex flex-col ">
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
            <h2 className="text-2xl font-bold">Events In Bengaluru</h2>
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
        <a href="/home">Home</a> → <a href="/events">Events</a>
      </div>

      <div className="p-6 bg-gray-100 text-gray-800">
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2 text-gray-600">
            Find The Latest and Best Events in Bengaluru Today!
          </h2>
          <p className="text-sm text-gray-500">
            If lounging on a sofa with a bowl of popcorn has become your daily
            ritual, you can jazz it up with some live events! Gone are the days
            when movies were the only source of real entertainment. Now you can
            take a break from the constant screen time to indulge in some live
            entertainment near you with the tap of a button. Find a curated list
            of upcoming events in <span className="font-bold">Bengaluru</span>{" "}
            so that you can spot the right event for that perfect weekend.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2 text-gray-600">
            How to book an event online?
          </h2>
          <p className="text-sm text-gray-500">
            Bookmyshow offers a simple, yet seamless experience for browsing,
            sorting, and booking handpicked events. Just click on the upcoming
            events of your choice, make the payment through one of the many
            payment gateways, and you’re good to go! <br /> <br /> Consider
            Bookmyshow as a one-stop-shop for all your live entertainment
            cravings. You have an option to filter the latest events according
            to category so you can find the same in the favourite category. You
            can also filter the genre so you can experience comedy, music,
            action, and more, artists for you to watch your favourite performer
            or venue so you can find the closest events to your home.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2 text-gray-600">
            Top 3 Events Categories
          </h2>
          <p className="text-sm text-gray-500">
            Live events are thoughtfully divided into three main categories:{" "}
            <br />
            <br />
            <span className="font-bold">Comedy events- </span> If you like to
            tickle your funny bone, comic relief can be your go-to option. Find
            the latest comedy events by some of Bengaluru’s best comedians.
            Catch them in Bengaluru performing specials, hosting open mics,
            trying out new sets, and more. <br />
            <br />
            <span className="font-bold">Music shows- </span> Looking for a way
            to unwind from the post-work blues?
            <span className="text-red-600">Music shows</span> might do the
            trick! Experience handpicked gigs, Bollywood, and concerts from a
            diverse choice of genres. <br />
            <br /> <span className="font-bold">Performance/workshops-</span>
            For those who want to coddle their senses with something more
            hands-on, you can book tickets to a live performance or workshop.
            This can be anything from plays to meetups to art workshops and much
            more.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2 text-gray-600">
            A hassle-free live events experience
          </h2>
          <p className="text-sm text-gray-500">
            Our <span className="text-red-600">online streaming events</span> in
            2024 are carefully organized. This digital spin on events lets you
            experience all the good stuff through your laptop or smartphone. Not
            only does this help you skip the pesky traffic jams but also lets
            you enjoy your favorite events from the safety of your home. <br />
            <br /> Booking tickets has never been more rewarding. BookMyShow
            aspires to bring to you live experiences in Bengaluru that are worth
            your time, money, and curiosity. Unlock exciting rewards by using
            exclusive offers and coupons. Taliking about events...
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2 text-gray-600">
            Get Tickets to the Latest Events in Your Bengaluru
          </h2>
          <p className="text-sm text-gray-500 mb-5">
            If you’re feeling lucky, you can become a Superstar with a special
            loyalty program. Avail exclusive offers and discounts for bookings
            on selected live events. If that doesn’t impress you, free delivery
            of merchandise through Fandom will certainly get you hooked. Going
            out with your team from work? Corporate vouchers will give you the
            best bang for your buck.
          </p>
          <p className="text-sm text-gray-500">
            Wait no more! Find the next event in Bengaluru and book your tickets
            now!
          </p>
        </div>
      </div>
    </>
  );
}
