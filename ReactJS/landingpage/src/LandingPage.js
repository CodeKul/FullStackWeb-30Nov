import React from "react";
import sea from "./sea.mp4";
import "./LandingPage.css";
function LandingPage() {
  return (
    <div>
      <section className="travel">
        <header>
          <h2 className="logo">Travel</h2>
        </header>
        <video src={sea} muted autoPlay={true}></video>
        <div className="text">
          <h2>Adventure Awaits</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            assumenda cumque ad! Aliquam fuga non quod quam corporis neque quae.
          </p>
          <a href="#">Explore</a>
        </div>
        <ul class="social">
          <li>
            <i class="fab fa-facebook-f"></i>
          </li>
          <li>
            <i class="fab fa-instagram"></i>
          </li>
          <li>
            <i class="fab fa-twitter"></i>
          </li>
        </ul>
      </section>
      <div className="menu">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LandingPage;
