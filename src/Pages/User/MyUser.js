import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Topbar from "../../Components/Topbar/Topbar";
import MyCalendar from "../../Components/MyCalendar";
import Interview from "../../Components/Interview";
import axios from "axios";



  

export default class MyUser extends Component {
    constructor(props){
        super(props);
        this.state = { candidate : {}}
    }
    
    
      componentDidMount = async () => {
        console.log("ibrahim")
        console.log(this)
        console.log("ibrahim2")
        let id = this.props.location.state.id;
        console.log("Oui 1")
        console.log(this.props.match.params)
        console.log("Oui 2")
        const url = `http://localhost:8080/employee/find/${id}`;
        axios.get(url)
          .then(res => {
            const candidate = res.data;
            this.setState({ candidate });
            console.log(candidate)
          })
      }
      
  render() {
    
    return (
        <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Topbar />
        <div className="user">
          <MyCalendar />
           {this.props.id} 
         {this.props.name} 
         {this.props.vacancy} 
         {this.props.phone} 
        {this.props.email} 
         {this.props.location} 
          {/* <Usr key={user.id} name={user.name} vacancy={user.vacancy} email={user.email} phone={user.phone} location={user.location}/> */}
          <hr />
          <h1>HR Manager section</h1>
          <div className="hrSection">
              <Interview />
              <Interview />
              <Interview />
          </div>
        </div>
      </div>
    </div>
    );
  }
  
}



