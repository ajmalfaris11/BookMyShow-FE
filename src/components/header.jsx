import React from "react";
import "../styles/header.css";

// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import specific icons
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-top-left">
          <img
            src="https://getlogo.net/wp-content/uploads/2020/04/bookmyshow-logo-vector.png"
            alt="bookmyshow logo"
            className="logo"
          />
          <div className="searchContainer">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcone" />
            <input
              type="search"
              placeholder="Search for Movies, Events, Plays, Sports and Activities"
            />
          </div>
        </div>

        <div className="header-right">
          <select
            value={location}
          >
            <option value="Bengaluru">Bengaluru</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Chennai">Chennai</option>
            <option value="Kolkata">Kolkata</option>
          </select>{" "}
          <button className="sign-in">Sign in</button>
          <button className="menu">☰</button>
        </div>
      </div>

      <div className="header-bottom">
        <nav>
          <div className="nav-items">
            <a href="/movies">Movies</a>
            <a href="/stream">Stream</a>
            <a href="/events">Events</a>
            <a href="plays">Plays</a>
            <a href="/sports">Sports</a>
            <a href="/activities">Activities</a>
          </div>

          <div className="nav-items ">
            <a href="#">ListYourShow</a>
            <a href="#">Corporates</a>
            <a href="#">Offers</a>
            <a href="#">Gift Cards</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
