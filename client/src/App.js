import "./App.css";
import Section from "./Components/Section1/section1";
import Filter from "./Components/Filter/filter";
import Chats from "./Components/Chats/chats";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminComplaints from "./Components/Admin_Complaints/complaints";
import Section2 from "./Components/Section2/section2";
import Students_Complain from "./Components/Students_Complain/complain";
import Students_Nav from "./Components/Students_Complain/nav";
import Admin_Nav from "./Components/Admin_Complaints/nav";
import Home_Nav from "./Components/Navbar/navbar";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
            <Route path="/"  element= {<><Home_Nav /> <Section /></>}   />
            <Route path="/student" element= {<><Students_Nav /> <Section /></>} />
            <Route path="/student/complains" element= {<><Students_Nav /> <Section2 /></>} />
            <Route path="/student/newcomplain" element= {<><Students_Nav /> <Students_Complain /></>} />
            <Route path="/student/history" element= {<><Students_Nav /> <Section2 /></>} />
            <Route path="/admin" element = {<><Admin_Nav /> <Section /></>} /> 
            <Route path="/admin/history" element= {<><Admin_Nav /> <Section2 /></>} />
            <Route path="/admin/complains" element= {<><Admin_Nav /> <AdminComplaints/></>} />
            </Routes>
        </BrowserRouter>

        {/* <Home_Nav /> */}
    </div>
  );
}

export default App;
