import React from "react";
import "./nav.css";
const NavAdmin = () => {
  return (
    <>
      <nav class="navbar3">
        <a href="" class="nav-link3 blue3 name2" data-content="Home">
          Hello
        </a>
        <div class="nav-list3">
          <a href="/admin" class="nav-link3 blue3">
            Home
          </a>
          <a href="/admin/history" class="nav-link3">
            History
          </a>
          <a href="/admin/complains" class="nav-link3">
            Complain
          </a>
          <a href="" class="nav-link3">
            Logout
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavAdmin;
