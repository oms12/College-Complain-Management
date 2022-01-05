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
          <a href="/studentComplains" class="nav-link2" data-content="Complaints">
          Complaints
          </a>
          <a href="" class="nav-link2">
            History
          </a>
          <a href="/studentnewComplain" class="nav-link2">
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
