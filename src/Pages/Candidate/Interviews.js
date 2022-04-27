import React, { useState, useEffect } from "react";
import "./Interviews.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Topbar from "../../Components/Topbar/Topbar";
import Interview  from "./Interview";
import MyCalendar from "../../Components/MyCalendar";
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";

import {  useParams } from "react-router-dom";

import axios from "axios";




const Interviews = () => {
  const [candidate, setCandidate] = useState({
    id:"",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
  });

  const  id = useParams()['userId'];
  useEffect(() => {
    loadUser();
  }, []);
  
  const loadUser = async () => {
    const url = `http://localhost:8080/candidate/find/${id}`;
    const res = await axios.get(url);
    setCandidate(res.data);

  };
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Topbar />
        <div className="user">
          <MyCalendar />
          <div>
                    <Link to="/calendar">
                        <Button  variant="contained"  color="primary" className="userSchedule" >
                            Schedule Interview
                        </Button>
                    </Link>
                        <br/>name: {candidate.first_name}<br/>
                        last name: {candidate.last_name}<br/>
                        Account Details<br/>
                        email: {candidate.email}<br/>
                        phone: {candidate.phone_number}<br/>
                </div>    
          {/* <Person key={user.id} first_name={user.first_name} last_name={user.last_name} email={user.email} phone_number={user.phone_number} />  */}
          <hr />
          <h1>HR Manager section</h1>
          <div className="hrSection">
              <Interview item="1" />
              <Interview item="2"  />
              <Interview item="3"  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interviews;
