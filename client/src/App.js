import "./App.css";
import Section from "./Components/Section1/section1";
import Filter from "./Components/Filter/filter";
import Chats from "./Components/Chats/chats";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminComplaints from "./Components/Admin_Complaints/complaints";
import Section2 from "./Components/Section2/section2";
import Students_Complain from "./Components/Students_Complain/complain";
import Students_Nav from "./Components/Students_Complain/nav";
import Admin_Nav from "./Components/Admin_Complaints/nav";
import Home_Nav from "./Components/Navbar/navbar";
import Student_Page from "./Components/Students_Page/student_page";
import Admin_Page from "./Components/Admin_Page/admin_page";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home_Nav /> <Section />
              </>
            }
          />
          <Route
            path="/student"
            element={
              <>
                <Students_Nav /> <Section />
              </>
            }
          />
          <Route
            path="/admin"
            element={
              <>
                <Admin_Nav /> <Section />
              </>
            }
          />
          <Route
            path="/adminComplains"
            element={
              <>
                <Admin_Nav /> <Section2 />
              </>
            }
          />
          <Route
            path="/studentComplains"
            element={
              <>
                <Students_Nav /> <Section2 />
              </>
            }
          />
          <Route
            path="/studentnewComplain"
            element={
              <>
                <Students_Nav /> <Students_Complain />
              </>
            }
          />
          <Route
            path="/studentHistory"
            element={
              <>
                <Students_Nav /> <Section2 />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
      {/* <Section /> */}
      {/* <AdminComplaints /> */}
      {/* <Home_Nav /> */}
    </div>
  );
}

export default App;
