import React from "react";
import Nav from "./nav";

import "./section3.css";
const Students_Complain = () => {
  return (
    <div className="section-3">
      <Nav />
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
          <input type="text" id="ID" placeholder="e.g.1,2 " required></input>
          <input type="date" id="date" placeholder="" required></input>
        </div>
        <br />
        <label for="related-to">Related to</label>
        <select class="form-control" id="dept_id" name="dept_id" required>
          <option value="" disabled selected hidden>
            Choose a dept
          </option>
          <option value="1">Academic</option>
          <option value="2">Sport</option>
          <option value="3">Cafeteria</option>
        </select>
        <br />
        <label for="complaint-subject">Complaint Subject</label>
        <input
          type="text"
          id="complaint-subject"
          placeholder="e.g. cafe food"
          required
        ></input>

        <br />
        <label for="complaint-msg">Complaint Text </label>
        <textarea
          id="complaint-msg"
          placeholder="e.g. cold chapatis"
          required
        ></textarea>
        <br />
        <button class="btn">Register Complaint</button>
      </div>
    </div>
  );
};

export default Students_Complain;
