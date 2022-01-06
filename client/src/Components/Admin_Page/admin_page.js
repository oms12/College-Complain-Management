import React, { useEffect, useState } from "react";
import "./admin_page.css";
import Admin_History from "./admin_history";
import image from "./image/admin.jpg";
import axios from "axios";
const url = "http://localhost:3000/admin/history/"; 
const Admin_Page = () => {
  const [history,sethistory] = useState([]);
 useEffect(()=>
 {
   async function getHistory()
   {
     try {
       //const department = localStorage.getItem(department);
       const res = await axios.get(url + "Sport");
       sethistory(res.data);
     } catch (error) {
       console.log(error);
     }
   }
   getHistory();
 },[])


  return (
    <div className="ADMIN_PAGE">
      <img src={image} alt="" className="img2_admin" />

      <div className="student_history_admin">
        <form action="">
          <label for="search_by_subject" className="label2">
            Search by subject
          </label>
          <input
            type="text"
            id="search_by_subject"
            placeholder="e.g Cafe food"
            className="input3"
          />
        </form>
        <div className="title_admin">
          <div className="department_admin">Roll No</div>
          <div className="subject_admin">Subject</div>
          <div className="date_admin">Date</div>
        </div>
        {/* <Admin_History roll_no="sports" subject="injury" date="1/1/1" />
        <Admin_History roll_no="2" subject="injury" date="1/1/1" />
        <Admin_History roll_no="2" subject="injury" date="1/1/1" />
        <Admin_History roll_no="2" subject="injury" date="1/1/1" />
        <Admin_History roll_no="2" subject="injury" date="1/1/1" /> */}
        {history.map((history)=>
        {
          return(
            <Admin_History
            subject={history.subject}
            roll_no={history.rollno}
            date={history.date}
           />
          );
        })}
      </div>
    </div>
  );
};

export default Admin_Page;
