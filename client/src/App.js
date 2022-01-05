import "./App.css";
import Section from "./Components/Section1/section1";
import Filter from "./Components/Filter/filter";
import Chats from "./Components/Chats/chats";

import AdminComplaints from "./Components/Admin_Complaints/complaints";
import Section2 from "./Components/Section2/section2";
import Students_Complain from "./Components/Students_Complain/complain";

function App() {
  return (
    <div className="App">
      {/* <Section2 /> */}
      <Students_Complain />
    </div>
  );
}

export default App;
