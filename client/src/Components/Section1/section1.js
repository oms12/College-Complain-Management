import React from "react";
import "./section1.css";
import Navbar from "../Navbar/navbar";
import Reactlogo from "./Image/pic1.svg";
const Section = () => {
  return (
    <div className="section-1">
      <div className="section1__container">
        <div className="section1__writing_part">
          <div className="writing_part">
            <p className="section1__writing_part__para1">
              COMPLAINT MANAGEMENT SYSTEM
            </p>
            <p className="section1__writing_part__para2">
              Complain Management is a platform designed to file ,<br />
              assess and resolve complaints and easy bussiness .The
              <br />
              Process is very Simple , Open the site ,login with institute
              <br />
              mail and file a complaint :)
            </p>

            <p className="section1__writting_part__para3">
              You can discuss the complaint ,get it resolved and even rate the
              response too :)
            </p>
            <div className="sign_in_button">
              <button className="sign_in">
                <i class="fab fa-google-plus-g"></i>Sign in with google
              </button>
            </div>
          </div>
        </div>
        <div className="section1__image_part">
          {/* <img src={require("./Image/pic1.svg")} className="img1" /> */}
          <img src={Reactlogo} className="img2" />
          <svg />
        </div>
      </div>
    </div>
  );
};

export default Section;
