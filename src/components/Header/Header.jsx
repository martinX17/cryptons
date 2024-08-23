import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Search from "../Search";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav-bar">
      <Link className="logo flex items-center" to="/">
        <img src="/bitcoin.png" alt="logo" className="h-[25px] pr-2" />
        Cryptons
      </Link>
      <div
        className={`burger-menu ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <ul className={`nav-list ${isOpen ? "open" : ""}`}>
        <Search setIsOpen={setIsOpen} />
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link ${
                isActive ? "border-b-2 border-purple-500 text-purple-500" : ""
              }`
            }
            onClick={toggleMenu}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/trending"
            className={({ isActive }) =>
              `nav-link ${
                isActive ? "border-b-2 border-purple-500 text-purple-500" : ""
              }`
            }
            onClick={toggleMenu}
          >
            Trending
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/gainers-losers"
            className={({ isActive }) =>
              `nav-link ${
                isActive ? "border-b-2 border-purple-500 text-purple-500" : ""
              }`
            }
            onClick={toggleMenu}
          >
            Gainers/Losers
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
