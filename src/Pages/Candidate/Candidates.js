import React, { Component } from "react";
import Candidate from "./Candidate";
import axios from "axios";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Topbar from "../../Components/Topbar/Topbar";
import Table from 'react-bootstrap/Table'

export default class Candidates extends Component {
  constructor(){
    super();
    this.state = { candidates : []}
  }

  componentDidMount() {
    const url = `http://localhost:8080/candidate/all`;
    axios.get(url)
      .then(res => {
        const candidates = res.data;
        this.setState({ candidates });
        console.log(candidates)
      })
  }
  mapping(x){
      const candidates = x.map( candidate =>
          <Candidate 
             key={candidate.id} 
             id={candidate.id} 
             first_name={candidate.first_name} 
             last_name={candidate.last_name} 
             email={candidate.email} 
             phone_number={candidate.phone_number} 
          />
        );
        return candidates;
  }
  render() {
    return (
      <div className="list">
        <Sidebar />
        <div className="listContainer">
            <Topbar />


            <Table striped bordered hover>
              <thead>
                <tr>
                <th>#</th>
                  <th>ID</th>
                  <th>User Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Applicant status</th>
                  <th>Star Applicant</th>
                </tr>
              </thead>
              <tbody>
                {this.mapping(this.state.candidates)}
              </tbody>
            </Table>
          </div>
        </div>
    );
  }
}