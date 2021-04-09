import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <ul className="nav-list">
        <li>
          {/* <a href="/">Home</a> */}
          <NavLink to="/" className="link">
            Home
          </NavLink>
        </li>
        <li>
          {/* <a href="/about">About</a> */}
          <NavLink to="/about" className="link" activeClassName="selectedlink">
            About
          </NavLink>
        </li>
        <li>
          {/* <a href="/contact">Contact Us</a> */}
          <NavLink to="/contact" className="link">
            Contact
          </NavLink>
        </li>
        <li>
          {/* <a href="/blog">Blog</a> */}
          <NavLink to="/blog" className="link">
            Blog
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
