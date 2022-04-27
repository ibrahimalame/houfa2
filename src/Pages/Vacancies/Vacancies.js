import React,{Component} from "react";
import NavBar from "../../Components/NavBar";

import "./Vacancies.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Topbar from "../../Components/Topbar/Topbar";

import axios from "axios";
import Vacancy from "./Vacancy";
import Table from 'react-bootstrap/Table'
import Modal from "../../Components/Modal/Modal";
import { Button } from "react-bootstrap";
import './Create.css'

class Vacancies extends Component{
    constructor(){
        super();
        this.state = { vacancies : []}
      }
      state = {
        visible:false
    }
    show = () => { this.setState({ visible: true})}
    hide = () => { this.setState({ visible: false }) }

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
      handelCallback = (X) =>{
          this.setState({vacancies:X})
      }
    render(){
      console.log("vavan")
        console.log(this.props.handelCallback)
        console.log("cies")
        return(
            <div className="list">
            <Sidebar />
            <div className="listContainer">
            {/* <Topbar />   */}
            <NavBar miseajour={this.handelCallback}/>
            {/* 
             <Button onClick={this.show} className="adroite" variant="danger"> Add Vacancy</Button>
                <Modal 
                    visible={this.state.visible}
                    hide = {this.hide}
                    switch = {1}
                /> */}

              <div className="datatable">
              <Table striped bordered hover className="width">
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