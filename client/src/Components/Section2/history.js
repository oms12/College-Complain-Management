import React from "react";
import "./section2.css";
const History = ({ id, rollno, subject, department, date}) => {
  date = date.split("T")[0];
  return (
    <>
      <div className="content_part2">
        <div className="section2id id2">{rollno}</div>
        <div className="section2subject subject2">{subject}</div>
        <div className="section2department department2">{department}</div>
        <div className="section2date date2">{date}</div>
        <div  className="section2date Details"><a  className="section2link" href="/student/complainDetail">
          Details
        </a></div>
      </div>
    </>
  );
};

export default History;
