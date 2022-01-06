import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar">
      <div class="nav-list">
        <a href="/" class="nav-link blue" data-content="Home">
          Home
        </a>
        <a href="" class="nav-link" data-content="Info">
          Info
        </a>
        <a href="" class="nav-link" data-content="About Us">
          About Us
        </a>
<<<<<<< HEAD

        <ul>
          <li className="Log_In">
            <a href="" class="nav-link" data-content="LogIn">
              LogIn
            </a>
            <ul className="hover">
              <li className="new">
                <a href="" className="student">
                  Student
                </a>
              </li>
              <li className="new">
                <a href="" className="admin">
                  Admin
                </a>
              </li>
            </ul>
          </li>
        </ul>
=======
        <a href="" class="nav-link" data-content="Login">
          Login
        </a>
>>>>>>> beb9fcd53248d5801e1802c743533f2a7a927803
      </div>
    </nav>
  );
};

export default Navbar;
