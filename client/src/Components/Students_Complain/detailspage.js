import React, { useEffect, useState } from "react";
import axios from "axios";

import "./complain.css";

const url = "http://localhost:3000/student/complain/" ;


const Students_Complain = (props) => {
  const id = props.id;
  const [Complain,setComplain] = useState({
    rollno: "",
    department: "",
    message: "",
    date: "",
  });
  useEffect(()=>
  {
    async function getdetails()
    {
      try {
        const res = await axios.get(url + id);
        setComplain(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getdetails();
  },[])
  return (
    <form>
    <div className="section-3">
      <div class="main-div">
        <div class="first-row">
          <div>
            {" "}
            <label for="ID">Rollno</label>
          </div>
          <div>
            {" "}
            <label for="date" class="date1">
              Date
            </label>
          </div>
        </div>
        <div class="first-row">
          <input type="text" id="ID" placeholder="e.g.1,2 " required name = "rollno" value={Complain.rollno} ></input>
          <input type="text" id="date" placeholder="" required name = "date" value={Complain.date.split("T")[0]}  ></input>
        </div>
        <br />
        <label for="related-to">Related to</label>
        <input class="form-control" id="dept_id" name="dept_id" required name = "department" value={Complain.department}>
        </input>
        <br />
        <label for="complaint-subject">Complaint Subject</label>
        <input
          type="text"
          id="complaint-subject"
          placeholder="e.g. cafe food"
          required
          name="subject"
          value={Complain.subject}
        ></input>

        <br />
        <label for="complaint-msg">Complaint Text </label>
        <textarea
          id="complaint-msg"
          placeholder="e.g. cold chapatis"
          required
          name="message"
          value={Complain.message}
        ></textarea>
        <br />
        <a class="btn"  href="/student/complains">Back</a>
      </div>
    </div>
    </form>
  );
};

export default Students_Complain;
