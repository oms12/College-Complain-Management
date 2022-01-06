import React, { useEffect, useState } from "react";
import "./student_page.css";
import Student_History from "./student_history";
import image from "./image/solo.jpg";
import axios from "axios";
const url = "http://localhost:3000/student/history/";
const Student_Page = () => {
 const [history,sethistory] = useState([]);
 useEffect(()=>
 {
   async function getHistory()
   {
     try {
       //const rollno = localStorage.getItem(rollno);
       const res = await axios.get(url + "1500002022");
       sethistory(res.data);
     } catch (error) {
       console.log(error);
     }
   }
   getHistory();
 },[])



  return (
    <div className="STUDENT_PAGE">
      <img src={image} alt="" className="img2" />
      <div className="student_history">
        <div className="title">
          <div className="department">Department</div>
          <div className="subject">Subject</div>
          <div className="date">Date</div>
        </div>
        {history.map((history)=>
        {
          return(
            <Student_History
            subject={history.subject}
            depart={history.department}
            date={history.date}
           />
          );
        })}
      </div>
    </div>
  );
};

export default Student_Page;
