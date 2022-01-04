import React from "react";

import "./section2.css";
import History from "./history";
const Section2 = () => {
  return (
    <div className="section_2">
      <div className="form_part">
        <div className="form_part_1">
          <form action="/action_page.php">
            <label for="cars" className="label">
              Filter by department
            </label>
            <select id="cars" name="cars" className="select">
              <option value="volvo" default>
                No Filter
              </option>
              <option value="sports">Sports</option>
              <option value="meals">Meals</option>
              <option value="library">Library</option>
              <option value="others">Others</option>
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
          <div className="id">Id</div>
          <div className="subject">Subject</div>
          <div className="department">Department</div>
          <div className="date">Date</div>
        </div>
        <History
          id="1"
          subject="i hate sports "
          department="sports"
          date="7/02/2020"
        />
        <History
          id="1"
          subject="i hate sports "
          department="sports"
          date="7/02/2020"
        />
        {/* <div className="content_part2">
          <div className="id id2">1</div>
          <div className="subject subject2">I Hate sports</div>
          <div className="department department2">sports</div>
          <div className="date date2">7/02/2002</div>
        </div> */}
      </div>
    </div>
  );
};

export default Section2;
