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
import VacancyList from "./Pages/Vacancies/VacancyList/VacancyList";
import AddVacancy from "./Pages/Vacancies/AddVacancy/AddVacancy";
import ViewVacancy from "./Pages/Vacancies/ViewVacancy/ViewVacancy";
/*import EditVacancy from "./Pages/Vacancy/EditVacancy/EditVacancy";*/

import CandidateList from "./Pages/Candidate/Candidates/CandidateList/CandidateList";
import AddCandidate from "./Pages/Candidate/Candidates/AddCandidate/AddCandidate";
import ViewCandidate from "./Pages/Candidate/Candidates/ViewCandidate/ViewCandidate";
import EditCandidate from "./Pages/Candidate/Candidates/EditCandidate/EditCandidate";
import ApplyCandidate from "./Pages/Candidate/Candidates/ApplyCandidate/ApplyCandidate";
import Spinner from "./Components/Spinner/Spinner";

let  App = () => {
  return (
      <React.Fragment>
        <NavBar />
      <Routes>
          <Route path={'/'} element={<Navigate to={'/vacancy/list'}/> }/>
          <Route path={'/vacancy/list'} element ={<VacancyList />} />
          <Route path={'/vacancy/add'} element ={<AddVacancy />} />
          <Route path={'/vacancy/view/:vacancyId'} element ={<ViewVacancy />} />
          {/*<Route path={'/vacancy/edit/:vacancyId'} element ={<EditVacancy />} />*/}
          <Route path={'/candidate/list'} element ={<CandidateList />} />
          <Route path={'/candidate/add'} element ={<AddCandidate />} />
          <Route path={'/candidate/view/:candidateId'} element ={<ViewCandidate />} />
          <Route path={'/candidate/edit/:candidateId'} element ={<EditCandidate />} />
          <Route path={'/candidate/apply'} element ={<ApplyCandidate />} />
      </Routes>
      </React.Fragment>
  );
}

export default App;

