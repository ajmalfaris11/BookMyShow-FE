import React, { useEffect, useState } from "react";
import MovieCard from "../components/movieCard";

// ===== Filter Datas =====

const dates = ["Today", "Tomorrow", "This Weekend"];

const catagories = [
  "Running",
  "Chess",
  "Football",
  "Cricket",
  "Kabaddi",
  "MMA",
  "Badminton",
  "Basketball",
  "Boxing",
  "Online Sports",
  "Tennis",
];

const moreFilters = ["Outdoor Events", "Kids Allowed", "Fast Filling"];

const prices = ["Free", "0 - 500", "501- 2000", "Above 2000"];

export default function Sports() {
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
            <h2 className="text-2xl font-bold">Sports In Bengaluru</h2>
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
        <a href="/home">Home</a> → <a href="/sports">Sports</a>
      </div>

      {/* ====== Footer Deatails Section ===== */}
      <div className="p-6 bg-gray-100 text-gray-800">
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2 text-gray-500">
            Obtain Information About all Upcoming Sports Events In bengaluru
          </h2>
          <p className="text-sm text-gray-500">
            India is a country where sportspersons receive immense love from
            fans and spectators. Sports lovers in this country are the prime
            reason for the enormous popularity of almost all sports in India.
            Although <span className="text-red-600">Cricket</span> is a religion
            for Indians, there is a sizable fan base of other sports events.{" "}
            <br />
            <br />
            You will know about upcoming sports events near you in 2024 on
            BookMyShow. Apart from obtaining detailed information, you can also
            book tickets for sports like , & happening in{" "}
            <span className="font-semibold">bengaluru</span> without any hassle.
            You can take part and enjoy the experience live.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2 text-gray-500">
            Witness or Take Part in Different Adrenaline-Boosting Sports Match
            in bengaluru
          </h2>
          <p className="text-sm text-gray-500">
            Witnessing live sports being at the stadium is a different
            experience altogether for the fans or sports lovers. On BookMyShow,
            you will get information about different sports categories. Major
            sports tournaments and leagues that are going to take place in
            <span className="font-semibold">bengaluru</span> in 2024 are
            expected to be updated soon, as they are the most enthralling events
            of the year. <br />
            <br />
            Sportspersons strive to deliver their best performance and entice
            spectators at the stadiums. No matter which sport makes you crazy,
            you will be able to book sports event tickets hassle-free from our
            website and witness the matches in front of your eyes. You can even
            take part in several <span className="text-red-600">e-sports </span>
            and play online from the convenience of your home after booking the
            sports tickets.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2 text-gray-500">
            Avail Upcoming Sports Event Rewards and the BookMyShow Exclusive
            Offers
          </h2>
          <p className="text-sm text-gray-500">
            Not many are lucky enough to win the superstar offers every time,
            but if luck is on your side, nothing can prevent you from acquiring
            the same and witnessing upcoming sports matches in bengaluru at no
            cost! Besides receiving sports venue offers, coupons, and corporate
            vouchers for booking upcoming sports events, you also receive home
            delivery of merchandise and premium concierge service. What could be
            better than this? <br />
            <br />
            To view the Superstar badge on your BookMyShow profile, you have to
            make 10 bookings in the last 365 days, and the transaction amount
            has to be at least Rs.100. If you book tickets for a sports event in
            bengaluru you may even receive lucrative rewards and gift cards.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2 text-gray-500">
            Stay Up-to-date with the Sports events in 2024 and Participate
          </h2>
          <p className="text-sm text-gray-500">
            On BookMyShow, you will find listings of different upcoming sports
            events and the time, date, and ticket price. You get the remarkable
            opportunity to register and participate in{" "}
            <span className="text-red-600">
              Badminton, Basketball,Football,{" "}
            </span>
            and Fitness Training sessions, Ludo Tournament, virtual cycling,
            boxing training sessions, national and international virtual run,{" "}
            <span className="text-red-600">Marathon,</span> etc.
            <br />
            <br /> You will receive notifications about every sporting event you
            wish to participate in if you download the BookMyShow app on your
            phone. You can now get all the latest sports news and events in one
            place and stay up-to-date. <br /> <br />
          </p>

          <p className="text-sm text-gray-500">
            Come, be a part of the sporting family! Enjoy all the sports events
            by booking tickets and getting regular updates for your favorite
            sports and teams!
          </p>
        </div>
      </div>
    </>
  );
}
