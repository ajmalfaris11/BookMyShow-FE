import React from "react";

const movieData = {
  nowShowing: [
    "Bhairathi Ranagal",
    "Amaran",
    "Wicked",
    "Zebra",
    "Mechanic Rocky",
    "The Sabarmati Report",
    "Sookshmadarshini",
    "Aaram Arvindswamy",
    "Lucky Baskhar",
    "I Want To Talk",
  ],
  upcomingMovies: [
    "Pa...Pa...(O Naanna)",
    "Sri Sri Sri Raajavaru",
    "Jalandhara",
    "Naa Ninna Bidalare",
    "Sapana Tie",
    "Mega Star Fan",
    "Bapu Ni Manda Mera",
    "Jahankilla",
    "Moana 2",
    "Miya Biwi Raazi Ki Karange Paaji",
  ],
  genres: [
    "Drama Movies",
    "Action Movies",
    "Thriller Movies",
    "Comedy Movies",
    "Romantic Movies",
    "Crime Movies",
    "Adventure Movies",
    "Fantasy Movies",
    "Mystery Movies",
    "Historical Movies",
  ],
  languages: [
    "Movies in Kannada",
    "Movies in English",
    "Movies in Hindi",
    "Movies in Malayalam",
    "Movies in Tamil",
    "Movies in Telugu",
    "Movies in Marathi",
    "Movies in Nepali",
    "Movies in Sindhi",
    "Movies in Chhattisgarhi",
  ],
  sports: [
    "Running",
    "Chess",
    "Football",
    "Cricket",
    "Mixed Martial Arts",
    "Kabaddi",
    "Basketball",
    "Baseball",
    "Boat Race",
    "Bowling",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white w-full">
      <div className="">
        {/* Top Section */}
        <div className="flex justify-between items-center w-full px-5 py-5">
          <div className="text-lg font-bold flex items-center gap-2">
            <img
              src="https://in.bmscdn.com/webin/common/icons/hut.svg"
              alt=""
            />
            List your Show
          </div>
          <div className="text-[18px]">
            Got a show, event, activity or a great experience? Partner with us &
            get listed on BookMyShow
          </div>
          <button className="bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700">
            Contact today!
          </button>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-around w-full bg-slate-800 py-5">
            {/* 24/7 Customer Care with Font Awesome icon */}
            <div className="flex items-center gap-4 flex-col">
              <i className="fas fa-headset text-white text-4xl"></i>{" "}
              {/* Font Awesome headset icon */}
              <span className="text-xs">24/7 CUSTOMER CARE</span>
            </div>

            {/* Resend Booking Confirmation with Font Awesome icon */}
            <div className="flex items-center gap-4 flex-col">
              <i className="fas fa-redo-alt text-white text-4xl"></i>{" "}
              {/* Font Awesome redo icon */}
              <span className="text-xs">RESEND BOOKING CONFIRMATION</span>
            </div>

            {/* Subscribe to the Newsletter with Font Awesome icon */}
            <div className="flex items-center gap-4 flex-col">
              <i className="fas fa-envelope text-white text-4xl"></i>{" "}
              {/* Font Awesome envelope icon */}
              <span className="text-xs">SUBSCRIBE TO THE NEWSLETTER</span>
            </div>
          </div>
        </div>

        {/* ---- movie datas ---- */}

        <div className="bg-gray-900 text-white">
          <div className="w-full px-4 py-8">
            {/* Movies Now Showing Section */}
            <section className="mb-8">
              <h3 className="text-sm font-semibold mb-6">
                MOVIES NOW SHOWING IN BENGALURU
              </h3>
              <div className="flex flex-wrap gap-2">
                {movieData.nowShowing.map((movie, index) => (
                  <span key={index} className="text-[12px]">
                    {movie} <span className="ml-1">|</span>
                  </span>
                ))}
              </div>
            </section>

            {/* Upcoming Movies Section */}
            <section className="mb-8">
              <h3 className="text-sm font-semibold mb-6">
                UPCOMING MOVIES IN BENGALURU
              </h3>
              <div className="flex flex-wrap gap-2">
                {movieData.upcomingMovies.map((movie, index) => (
                  <span key={index} className="text-[12px]">
                    {movie} <span className="ml-1">|</span>
                  </span>
                ))}
              </div>
            </section>

            {/* Movies by Genre Section */}
            <section className="mb-8">
              <h3 className="text-sm font-semibold mb-6">MOVIES BY GENRE</h3>
              <div className="flex flex-wrap gap-2">
                {movieData.genres.map((genre, index) => (
                  <span key={index} className="text-[12px]">
                    {genre} <span className="ml-1">|</span>
                  </span>
                ))}
              </div>
            </section>

            {/* Movies by Language Section */}
            <section className="mb-8">
              <h3 className="text-sm font-semibold mb-6">MOVIES BY LANGUAGE</h3>
              <div className="flex flex-wrap gap-2">
                {movieData.languages.map((language, index) => (
                  <span key={index} className="text-[12px]">
                    {language} <span className="ml-1">|</span>
                  </span>
                ))}
              </div>
            </section>

            {/* Sports Events Section */}
            <section>
              <h3 className="text-sm font-semibold mb-6">
                SPORTS EVENTS IN BENGALURU
              </h3>
              <div className="flex flex-wrap gap-2">
                {movieData.sports.map((sport, index) => (
                  <span key={index} className="text-[12px]">
                    {sport} <span className="ml-1">|</span>
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* ------ FINAL FOOTER SECTION ------ */}

        <div className="bg-gray-900 text-gray-400 py-6">
          <div className="mx-auto px-4 flex flex-col items-center">
            <div className="w-full flex justify-center content-center items-center h-full py-12 relative">
              <div className="bg-white w-full h-[1px] absolute z-0"></div>
              <div className=" bg-slate-900 px-8 w-50 z-10">
                <img
                  src="https://in.bmscdn.com/webin/common/icons/logo.svg"
                  alt="footer logo"
                />
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-6 mb-10 text-2xl">
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                aria-label="Pinterest"
              >
                <i className="fab fa-pinterest"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>

            {/* Copyright Information */}
            <p className="text-center text-sm">
              Copyright 2024 © Your Company. All Rights Reserved.
            </p>
            <p className="text-center text-xs mt-2 mb-10">
              The content and images used on this site are copyright protected
              and copyrights vest with the respective owners. Unauthorized use
              is prohibited and punishable by law.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
