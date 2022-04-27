import "./App.css";
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Vacancies from "./Pages/Vacancies/Vacancies";
import Starred from "./Pages/Starred/Starred";
import PCal from "./Pages/PCal/PCal";
import Candidates from "./Pages/Candidate/Candidates";
import "react-datepicker/dist/react-datepicker.css";
import Interviews from "./Pages/Candidate/Interviews";
import CandidateList from "./Pages/Candidate/Candidates/CandidateList/CandidateList";
import AddCandidate from "./Pages/Candidate/Candidates/AddCandidate/AddCandidate";
import ViewCandidate from "./Pages/Candidate/Candidates/ViewCandidate/ViewCandidate";
import EditCandidate from "./Pages/Candidate/Candidates/EditCandidate/EditCandidate";
import Spinner from "./Components/Spinner/Spinner";

let  App = () => {
  return (
      <React.Fragment>
        <NavBar />
      <Routes>
          <Route path={'/'} element={<Navigate to={'/candidate/list'}/> }/>
          <Route path={'/candidate/list'} element ={<CandidateList />} />
          <Route path={'/candidate/add'} element ={<AddCandidate />} />
          <Route path={'/candidate/view/:candidateId'} element ={<ViewCandidate />} />
          <Route path={'/candidate/edit/:candidateId'} element ={<EditCandidate />} />
      </Routes>
      </React.Fragment>
  );
}

export default App;

