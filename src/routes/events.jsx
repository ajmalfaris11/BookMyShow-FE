import React, { useEffect, useState } from "react";
import MovieCard from "../components/movieCard";

// ===== Filter Datas =====

const dates = ["Today", "Tomorrow", "This Weekend"]

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
  "Sankrit"
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

const prices = [
  "Free",
  "0 - 500",
  "501- 2000",
  "Above 2000",
];

export default function Events() {

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

      <div className="pl-10">
        {/* ====== Events In Location ====== */}
        <div>
          <h2 className="text-2xl font-bold">Events In Bengaluru</h2>
          
        </div>
      </div>
    </div>

    {/* ----- ROUTER LINKS ----- */}
    <div className="w-full bg-white p-3  flex justify-start items-start gap-2 text-slate-700">
      <a href="/home">Home</a>  → <a href="/events">Events</a>
    </div>

   
      

      
   </>
  );
}
