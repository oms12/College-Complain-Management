import React from "react";
import "./student_history.css";

const Student_History = ({ depart, subject, date }) => {
  return (
    <div className="complain_part">
      <div className="complain_part_1">
        <div className="depart">{depart}</div>
        <div className="sub">{subject}</div>
        <div className="date4">{date}</div>
      </div>

      <div className="complain_part_2">
        <button className="delete">Delete</button>
      </div>
    </div>
  );
};

export default Student_History;
