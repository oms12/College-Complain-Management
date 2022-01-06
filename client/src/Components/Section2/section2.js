import React, { useEffect, useState } from "react";
import axios from "axios";
import "./section2.css";
import History from "./history";


const url = "http://localhost:3000/student";
const Section2 = (props) => {
   const [complains,setcomplains] = useState([]);
   const [need,setneed] = useState([]);
  useEffect(()=>
  {
    async function getComplains()
    {
       const res =  await axios.get(url);
       setneed(res.data);
       setcomplains(res.data);
    }
    getComplains();
  },[]);

  async function handleChange(event)
  {
      const {name,value} = event.target;
      if(value === "No Filter")
      {
        setcomplains(need);
      }
      else{
        const res = need.filter((complain)=>
        {
          return (complain.department === value);
        })
        setcomplains(res);
      }
  }
  




  return (
    <div className="section_2">
      <div className="form_part">
        <div className="form_part_1">
          <form >
            <label className="label">
              Filter by department
            </label>
            <select   className="select"  onChange={handleChange}>
              <option value="No Filter" default>
                No Filter
              </option>
              <option value="Sport">Sports</option>
              <option value="meals">Meals</option>
              <option value="library">Library</option>
            </select>
          </form>
        </div>

        <div className="form_part_2">
          <form action="" className="form2">
            <label for="search_by_subject" className="label2">
              Search by subject
            </label>
            <input
              type="text"
              id="search_by_subject"
              placeholder="e.g Cafe food"
              className="input2"
            />
          </form>
        </div>
      </div>
      <div className="filter_section">
        <div className="content_part">
          <div className="section2id">Rollno</div>
          <div className="section2subject">Subject</div>
          <div className="section2department">Department</div>
          <div className="section2date">Date</div>
          <div className="section2Details">Details</div>
        </div>
        {complains.map((complain)=>
        {
          return(
            <History
            complain = {complain}
            id = {complain._id}
            rollno = {complain.rollno}
            subject = {complain.subject}
            department = {complain.department}
            date = {complain.date}
           />
          );
        })}
      </div>
    </div>
  );
};

export default Section2;
