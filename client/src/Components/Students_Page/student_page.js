import React from "react";
import "./student_page.css";
import Student_History from "./student_history";
import image from "./image/solo.jpg";
const Student_Page = () => {
  return (
    <div className="STUDENT_PAGE">
      <img src={image} alt="" className="img2" />
      <div className="student_history">
        <div className="title">
          <div className="department">Department</div>
          <div className="subject">Subject</div>
          <div className="date">Date</div>
        </div>
        <Student_History depart="sports" subject="injury" date="1/1/1" />
        <Student_History depart="2" subject="injury" date="1/1/1" />
        <Student_History depart="2" subject="injury" date="1/1/1" />
        <Student_History depart="2" subject="injury" date="1/1/1" />
        <Student_History depart="2" subject="injury" date="1/1/1" />
      </div>
    </div>
  );
};

export default Student_Page;
