import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav>
        <ul className="navbar">
          <li>
            <NavLink className="link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/blogs">
              Blogs
            </NavLink>
          </li>

          <li>
            <NavLink className="link" to="/gamepage">
              Play a game
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
