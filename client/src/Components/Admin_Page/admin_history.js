import React from "react";
import "./admin_history.css";

const Admin_History = ({ roll_no, subject, date }) => {
  return (
    <div className="complain_part_admin">
      <div className="complain_part_1_admin">
        <div className="depart_admin">{roll_no}</div>
        <div className="sub_admin">{subject}</div>
        <div className="date4_admin">{date}</div>
      </div>

      <div className="complain_part_2_admin">
        <button className="delete_admin">Delete</button>
      </div>
    </div>
  );
};

export default Admin_History;
