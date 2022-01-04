import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar">
      <div class="nav-list">
        <a href="" class="nav-link blue" data-content="Home">
          Home
        </a>
        <a href="" class="nav-link" data-content="Complaints">
          Complaints
        </a>
        <a href="" class="nav-link" data-content="Info">
          Info
        </a>
        <a href="" class="nav-link" data-content="About Us">
          About Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
