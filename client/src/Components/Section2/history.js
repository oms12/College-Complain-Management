import React from "react";
import "./section2.css";
const History = ({ id, subject, department, date }) => {
  date = date.split("T")[0];
  return (
    <>
      <div className="content_part2">
        <div className="id id2">{id}</div>
        <div className="subject subject2">{subject}</div>
        <div className="department department2">{department}</div>
        <div className="date date2">{date}</div>
      </div>
    </>
  );
};

export default History;
