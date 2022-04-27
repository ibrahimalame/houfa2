import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Vacancies from "./Pages/Vacancies/Vacancies";
import Starred from "./Pages/Starred/Starred";
import PCal from "./Pages/PCal/PCal";
import Candidates from "./Pages/Candidate/Candidates";
import "react-datepicker/dist/react-datepicker.css";
import Interviews from "./Pages/Candidate/Interviews";

function ExApp() {
  return (
    <div className="h">
      {/* <Topbar /> */}

      <div className="container">
        {/* <Sidebar /> */}
        <div className="other">
          <Routes>
            {/* <Route exact path="/" element={<Form />}></Route> */}
            {/* {<Route exact path="/" element={<Home />}></Route>} */}
            <Route exact path="/vacances" element={<Vacancies />}></Route>
            <Route exact path="/" element={<Vacancies />}></Route>
            <Route exact path="/candidates" element={<Candidates />}></Route>
            <Route exact path="/starred-applications"  element={<Starred />}></Route>
            <Route exact path="/calendar" element={<PCal />}></Route>
            <Route exact path="/interviews/:userId" element={<Interviews />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default ExApp;

