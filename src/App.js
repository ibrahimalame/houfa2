import "./App.css";
import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Topbar from "./Components/Topbar/Topbar";
import Home from "./Pages/Home/Home";
import { Candidate } from "./Pages/Candidate/Candidate";
import { Route, Routes } from "react-router-dom";
import Vacancies from "./Pages/Vacancies/Vacancies";
import Starred from "./Pages/Starred/Starred";
import SignUp from "./Components/SignUp/SignUp";
import Form from "./Components/SignUp/Form";
import PCal from "./Pages/PCal/PCal";
import User from "./Pages/User/User";
import MyCandidates from "./Pages/Candidate/MyCandidates";
import MyUser from "./Pages/User/MyUser";
import { useParams } from "react-router-dom";
function withParams(Component) {
  
  return props => <MyUser {...props} params={useParams()} />;
}
function App() {
  return (
    <div className="h">
      {/* <Topbar /> */}

      <div className="container">
        {/* <Sidebar /> */}
        <div className="other">
          <Routes>
            {/* <Route exact path="/" element={<Form />}></Route> */}
            {/* {<Route exact path="/" element={<Home />}></Route>} */}
            <Route exact path="/applicants" element={<MyCandidates />}></Route>
            <Route exact path="/" element={<Vacancies />}></Route>
            <Route exact path="/starred-applications"  element={<Starred />}></Route>
            <Route exact path="/calendar" element={<PCal />}></Route>
            <Route exact path="/user/:userId" element={<User />}></Route>
            {/* <Route path="/user/:userId" component={MyUser}></Route> */}
            {/* <Route path="/user/:id" render={(props) => <MyUser {...props} />}/> */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
// https://www.youtube.com/watch?v=5RA5NpxbioI
// https://www.youtube.com/watch?v=O_XL9oQ1_To
