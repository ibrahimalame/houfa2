import React, { Component } from "react";
import MyCandidate from "./MyCandidate";
import axios from "axios";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Topbar from "../../Components/Topbar/Topbar";
import Table from 'react-bootstrap/Table'

export default class MyCandidates extends Component {
  constructor(){
    super();
    this.state = { candidates : []}
  }

  componentDidMount() {
    const url = `http://localhost:8080/employee/all`;
    axios.get(url)
      .then(res => {
        const candidates = res.data;
        this.setState({ candidates });
        console.log(candidates)
      })
  }
  mapping(x){
      const candidates = x.map( candidate =>
          <MyCandidate 
             key={candidate.id} 
             id={candidate.id} 
             name={candidate.name} 
             vacancy={candidate.vacancy} 
             email={candidate.email} 
             phone={candidate.phone} 
             location={candidate.location}
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
                  <th>Vacancy</th>
                  <th>Phone</th>
                  <th>Email</th>
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