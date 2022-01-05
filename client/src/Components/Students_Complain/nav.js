import React from "react";
import "./nav.css";
const Nav = () => {
  return (
    <>
      <nav class="navbar2">
        <a href="" class="nav-link2 blue2 name" data-content="Home">
          Hello
        </a>
        <div class="nav-list2">
          <a href="/student" class="nav-link2 blue2">
            Home
          </a>
          <a href="/student/complains" class="nav-link2" data-content="Complaints">
          Complaints
          </a>
          <a href="/student/history" class="nav-link2">
            History
          </a>
          <a href="/student/newcomplain" class="nav-link2">
            New Complain
          </a>
          <a href="" class="nav-link2">
            Logout
          </a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
