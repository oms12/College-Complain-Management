import React from "react";
import "./admin_page.css";
import Admin_History from "./admin_history";
import image from "./image/admin.jpg";
const Admin_Page = () => {
  return (
    <div className="ADMIN_PAGE">
      <img src={image} alt="" className="img2_admin" />
      <div className="student_history_admin">
        <div className="title_admin">
          <div className="department_admin">Roll No</div>
          <div className="subject_admin">Subject</div>
          <div className="date_admin">Date</div>
        </div>
        <Admin_History roll_no="sports" subject="injury" date="1/1/1" />
        <Admin_History roll_no="2" subject="injury" date="1/1/1" />
        <Admin_History roll_no="2" subject="injury" date="1/1/1" />
        <Admin_History roll_no="2" subject="injury" date="1/1/1" />
        <Admin_History roll_no="2" subject="injury" date="1/1/1" />
      </div>
    </div>
  );
};

export default Admin_Page;
