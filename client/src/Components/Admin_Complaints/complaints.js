import React from "react";
import NavAdmin from "./nav";
import "./complaint.css";

const AdminComplaints = () => {
  return (
    <div className="section-3">
      <NavAdmin />
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

        <br />
        <label for="resolved-msg">Resolved Text </label>
        <textarea
          id="resolved-msg"
          placeholder="e.g please inform complains authority"
          required
        ></textarea>
        <br />
        <button class="btn">Resolve Complaint</button>
      </div>
    </div>
  );
};

export default AdminComplaints;
