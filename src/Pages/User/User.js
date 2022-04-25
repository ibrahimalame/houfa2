import React, { useState, useEffect } from "react";
import "./User.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Topbar from "../../Components/Topbar/Topbar";
import Interview  from "../../Components/Interview";
import MyCalendar from "../../Components/MyCalendar";

import {  useParams } from "react-router-dom";

import axios from "axios";
import  Person  from "./Person";



const User = () => {
  const [user, setUser] = useState({
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
    setUser(res.data);

  };
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Topbar />
        <div className="user">
          <MyCalendar />
          <Person key={user.id} first_name={user.first_name} last_name={user.last_name} email={user.email} phone_number={user.phone_number} /> 
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

export default User;
