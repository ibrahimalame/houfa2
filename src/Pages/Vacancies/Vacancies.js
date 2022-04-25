import React,{Component} from "react";
import Bouton from "../../Components/Modal/Bouton";

import "./Vacancies.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Topbar from "../../Components/Topbar/Topbar";

import axios from "axios";
import Vacancy from "./Vacancy";
import Table from 'react-bootstrap/Table'


class Vacancies extends Component{
    constructor(){
        super();
        this.state = { vacancies : []}
      }
    
      componentDidMount() {
        console.log("Oui")
        const url = `http://localhost:8080/vacancy/all`;
        axios.get(url)
          .then(res => {
            const vacancies = res.data;
            this.setState({ vacancies });
          })
      }
      mapping(x){
        const vacancies = x.map( vacancy =>
            <Vacancy 
               key={vacancy.id} 
               id={vacancy.id} 
               title = {vacancy.title} 
               time = {vacancy.time} 
            />
          );
          return vacancies;
    }

    render(){
        return(
            <div className="list">
            <Sidebar />
            <div className="listContainer">
            <Topbar />          
              <Bouton />

              <div className="datatable">
              <Table striped bordered hover>
              <thead>
                <tr>
                <th>#</th>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Time</th>
                  <th>Applicant status</th>
                  <th>Star Applicant</th>
                </tr>
              </thead>
              <tbody>
                {this.mapping(this.state.vacancies)}
              </tbody>
            </Table>
              </div>
            </div>
          </div>
            
        )
    }
}
export default Vacancies; 