import React, { useState } from "react";
import axios from "axios";

import "./complain.css";

const url = "http://localhost:3000/student/add" ;


const Students_Complain = () => {
  const [Complain,setComplain] = useState({
    rollno: "",
    title : "",
    department: "",
    message: "",
    date: "",
  });

async function handleSubmit(event)
 {
    event.preventDefault(); 
    try {
      const res =  await axios.post(url,Complain);
      console.log(res);
      setComplain({
        rollno: "",
        department: "",
        subject: "",
        message: "",
        date: "",
      });
    } catch (error) {
      console.log(error);
    }
 }
 function handleChange(event)
 {
    
    const {name,value} = event.target;
    setComplain(prevValue=>
      {
        return ({
          ...prevValue,[name]:value, // to store previous value and change only event
        })
      })
    
 }











  return (
    <form>
    <div className="section-3">
      <div class="main-div">
        <div class="first-row">
          <div>
            {" "}
            <label for="ID">Secy ID</label>
          </div>
          <div>
            {" "}
            <label for="date" class="date1">
              Date
            </label>
          </div>
        </div>
        <div class="first-row">
          <input type="text" id="ID" placeholder="e.g.1,2 " required name = "rollno" value={Complain.rollno} onChange={handleChange}></input>
          <input type="date" id="date" placeholder="" required name = "date" value={Complain.date} onChange={handleChange} ></input>
        </div>
        <br />
        <label for="related-to">Related to</label>
        <select class="form-control" id="dept_id" name="dept_id" required name = "department" value={Complain.department} onChange={handleChange}>
          <option value="" disabled selected hidden>
            Choose a dept
          </option>
          <option value="Academic">Academic</option>
          <option value="Sport">Sport</option>
          <option value="Cafteria">Cafeteria</option>
        </select>
        <br />
        <label for="complaint-subject">Complaint Subject</label>
        <input
          type="text"
          id="complaint-subject"
          placeholder="e.g. cafe food"
          required
          name="subject"
          value={Complain.subject}
          onChange={handleChange}
        ></input>

        <br />
        <label for="complaint-msg">Complaint Text </label>
        <textarea
          id="complaint-msg"
          placeholder="e.g. cold chapatis"
          required
          name="message"
          value={Complain.message}
          onChange={handleChange}
        ></textarea>
        <br />
        <button class="btn" type="submit" onClick={handleSubmit}>Register Complaint</button>
      </div>
    </div>
    </form>
  );
};

export default Students_Complain;
