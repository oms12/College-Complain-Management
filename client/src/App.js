import "./App.css";
import Section from "./Components/Section1/section1";
import Filter from "./Components/Filter/filter";
import Chats from "./Components/Chats/chats";

import AdminComplaints from "./Components/Admin_Complaints/complaints";
import Section2 from "./Components/Section2/section2";
import Students_Complain from "./Components/Students_Complain/section3";

function App() {
  return (
    <div className="App">
      <Section />
      <Section2 />
      {/* <Section3 /> */}
      {/* <Students_Complain /> */}
      {/* <AdminComplaints /> */}
    </div>
  );
}

export default App;
