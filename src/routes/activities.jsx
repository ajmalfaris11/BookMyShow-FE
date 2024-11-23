import React, { useEffect, useState } from "react";
import MovieCard from "../components/movieCard";

// ===== Filter Datas =====

const dates = ["Today", "Tomorrow", "This Weekend"];

const catagories = [
  "Adventure",
  "Parties",
  "Nightlife",
  "Tourist Attractions",
  "Amusement Parks",
  "Gaming",
  "Unique Tours",
  "Food and Drinks",
  "Festivals",
  "Antiques, Heritage, Museums",
  "Christmas Celebrations",
  "Navratri Celebration",
  "Quizzes and Competitions",
];

const moreFilters = [
  "Outdoor Events",
  "Kids Allowed",
  "Fast Filling",
  "Kids Activities",
  "Weekend Gateway",
  "Challenges",
  "Dinner",
  "Must Attend",
  "Party",
  "Stay Packages",
  "Theme Party",
  "Unmissable Events",
];

const prices = ["Free", "0 - 500", "501- 2000", "Above 2000"];

export default function Activities() {
  return (
    <>
      <div className="flex p-10 bg-slate-100">
        {/* ====== FILTER SECTION ====== */}
        <div className="w-3/5 flex flex-col ">
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
            <h2 className="text-2xl font-bold">Activities In Bengaluru</h2>
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
        <a href="/home">Home</a> → <a href="/activities">Activities</a>
      </div>

      {/* ====== Footer Deatails Section ===== */}
      <div className="p-6 bg-gray-100 text-gray-800">
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2 text-gray-500">
            Get Ready to Have a Great Time With Activities in bengaluru
          </h2>
          <p className="text-xs text-gray-500">
            BookMyShow is home to your search for world-class activities to do
            in bengaluru. So, clear your mind after a long, hectic day by
            knowing what's happening near you. There are many fun things to do
            in your bengaluru like watching shows, exploring the outskirts of
            the city, watching popular sports, clubbing, visiting amusement and
            theme parks.
            <br />
            <br />
            We, at BookMyShow, team up with well-known organizers and travel
            groups to provide you with the safest experience. As per your mood
            and taste, we will bring you the live activities that are happening
            in 2024. There are various gift cards, coupons, offers, and rewards
            that you’ll receive when you plan your things to do in 2024 with us.
            Turn your boring weekend into something extravagant and get to know
            all the details about outdoor activities near you.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2 text-gray-500">
            Exciting Activities You Should Venture In bengaluru!
          </h2>
          <p className="text-xs text-gray-500">
            bengaluru is the best place to find an enormous variety of
            activities. We promise a unique experience that you will never
            forget. Get social - get active - get going! As your ultimate guide
            to entertainment and leisure, BookMyShow offers a plethora of
            activities to cater to every interest and mood. Let’s dive into the
            exciting activities awaiting you: <br />
            <br />
          </p>
          <span className="text-red-600 font-semibold text-sm">
            Adventure:
          </span>{" "}
          
          <p className="text-xs text-gray-500 my-3">
            From bungee jumping and skydiving to trekking and river rafting,
            there's an adventure for everyone. Unleash your inner daredevil and
            embark on an unforgettable escapade.
          </p>{" "}
          <span className="text-red-600 font-semibold text-sm">
            Gaming:
          </span>{" "}
         
          <p className="text-xs text-gray-500 my-3">
            Calling all gamers! Whether you’re a fan of virtual reality, console
            gaming, or interactive escape rooms, you’ll find a variety of gaming
            events and tournaments to test your skills and have a blast with
            fellow gaming enthusiasts.
          </p>{" "}
          <span className="text-red-600 font-semibold text-sm">
            Amusement Parks:
          </span>{" "}
        
          <p className="text-xs text-gray-500 my-3">
            We offer some of the most thrilling and family-friendly amusement
            parks in bengaluru. Enjoy exhilarating rides, live entertainment,
            and captivating shows that will leave you with cherished memories.
          </p>{" "}
          <span className="text-red-600 font-semibold text-sm">
            Resorts:
          </span>{" "}
          <p className="text-xs text-gray-500 my-3">
            Indulge in a luxurious getaway at some of the finest resorts in
            bengaluru. We provide a curated selection of resorts where you can
            relax, rejuvenate, and unwind in serene surroundings. Whether you
            prefer a beachfront retreat, a mountainous hideaway, or a spa
            retreat, find the perfect resort to escape the hustle and bustle of
            daily life.
          </p>{" "}
          <span className="text-red-600 font-semibold text-sm">
            Food and Drinks:
          </span>{" "}
          <p className="text-xs text-gray-500 my-3">
            Treat your taste buds to a culinary adventure with an array of food
            and drink experiences. Discover exquisite dining options, food
            festivals, wine tastings, and cooking workshops that will tantalize
            your senses and satisfy your gastronomic cravings.
          </p>{" "}
          <span className="text-red-600 font-semibold text-sm">
            Tourist Attractions:
          </span>{" "}
          <p className="text-xs text-gray-500 my-3">
            If you’re a traveler or a local looking to explore the hidden gems
            near bengaluru, discover and book tickets to popular tourist
            attractions, historical landmarks, museums, and cultural
            experiences. Dive into the rich heritage and vibrant culture near
            bengaluru through a myriad of engaging activities.
          </p>{" "}
          <span className="text-red-600 font-semibold text-sm">
            Nightlife & Parties:
          </span>{" "}
          <p className="text-xs text-gray-500 my-3">
            Get ready to dance the night away at the hottest parties in town.
            BookMyShow keeps you updated on the most happening nightlife events,
            concerts, and music festivals. Grab your friends, put on your
            dancing shoes, and create unforgettable memories on the dance floor.
            <br />
            <br /> Experience the thrill and excitement of stepping out of your
            comfort zone. We have fun activities for all age groups to try new
            experiences.
          </p>{" "}
          <br />
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2 text-gray-500">
            Avail Upcoming Sports Event Rewards and the BookMyShow Exclusive
            Offers
          </h2>
          <p className="text-xs text-gray-500">
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
            Check Out Our Handpicked List Of Activities
          </h2>
          <p className="text-xs text-gray-500">
            Craving excitement, laughter, and unforgettable memories? Look no
            further than your own Bengaluru! Discover the best activities in
            Bengaluru, handpicked just for you. We share in-depth information
            and offer you the best price for the online booking of the tickets.
            Find everything you need to know by clicking on the interested card.
            <br />
            <br /> From heart-pounding drops on thrilling roller coasters to
            mouthwatering street food!! We offer a diverse range of activities
            to nurture your passions and explore new interests. Unleash your
            creativity, expand your horizons, and engage in enriching
            experiences that enhance your personal growth. There are a plethora
            of fun activities such as <span className="text-red-500">Skandagiri Trek, Timezone Mantri Square
            Mall Bangalore, Timezone Phoenix MarketCity Bangalore, Timezone
            Phoenix Mall of Asia Bangalore, & Jollywood Studios and Adventure.</span>
            You can find the package or experience that is the best fit for you.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2 text-gray-500">
            Exclusive Activity Ticket Offers Available Just for You
          </h2>
          <p className="text-xs text-gray-500">
            Do not wait any further; we are running out of tickets pretty fast.
            Explore the activities section, and embark on unforgettable
            experiences that will leave you entertained and rejuvenated.
            <br />
            <br /> We ensure that you receive exclusive discounts when you book
            with us in Bengaluru. Become a superstar, and we've got you covered
            under superstar offers. A superstar gets exclusive offers on live
            events, free delivery of fan merchandise, free cancellation, and
            many such fringe benefits.
            <br />
            <br />
            We offer a safe payment gateway along with multiple payment options.
            Only at BookMyShow will you come across these fantastic offers and
            gift cards. Not just this, we also offer rewards and paybacks on a
            few selected cards.
            <br /> <br />
            Get ready and book your online tickets for our activities in
            Bengaluru today!
          </p>
        </div>
      </div>
    </>
  );
}
