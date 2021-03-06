import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import DatePicker from "react-datepicker";
import axios from "axios";
import './Create.css'
import { BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link,useEffect } from "react-router-dom";

class Create extends Component{
    constructor(props){
        super(props)
        this.state={title : "", date : new Date()}
        console.log("const_create")
            console.log(this.props)
        console.log("const_create")
        
    }
    state = {
        liste:{}
    }
    setListe = (X) => { this.setState({ liste: X})}
    //handleClose = () => setShow(false);
    //handleShow = () => setShow(true); 
    sendData = () => {
        this.props.hide();
    }
    sendDataToAPI = (liste)=>{
        const j = this.state.date.getDate()
        const m = this.state.date.getMonth()+1
        const a = this.state.date.getFullYear()
        const laDate =((j<10)?("0"+j):j)+"-"+((m<10)?("0"+m):m)+"-"+a
        const vacancy ={
            "title": this.state.title,
            "date" : laDate

        };
        console.log(vacancy)
        axios.post('http://localhost:8080/vacancy/add', vacancy)

        .then(function (response) {
            console.log(response);
            
        })
        .catch(function (error) {
            console.log(error);
        });
        const getVacancies = (liste)=>{
            const url = `http://localhost:8080/vacancy/all`;
            axios.get(url)
              .then(res => {
                const vacancies = res.data;
                
                this.setListe(liste);
              })
    
              console.log("brahim ALAME");
              console.log(liste);
              console.log("brahim ALAME");
        }
        getVacancies(liste);
        
        

        
}
  render(){
    return (
        <>
            <span className="adroite" onClick={this.sendData}>X</span>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Title</Form.Label>
            <Form.Control name="title" onChange={(e)=>this.setState({title : e.target.value})}  type="text" placeholder="Enter title" />
            <Form.Text className="text-muted">
            This is a vacancy title
            </Form.Text>
            </Form.Group>
        
            <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Date</Form.Label>
            <Form.Text name="date" onChange={(e)=>this.setState({date : e.target.value})} className="text-muted" >
                <DatePicker 
                selected={this.state.date} 
                onChange={d => this.setState({date:d})} 
                />
            </Form.Text>
            
            </Form.Group>
        </Form>
        <Link to={{ 
            pathname: `/`,
            }}> <Button variant="success" onClick={this.sendDataToAPI()}>Submit</Button>
          </Link>
        
        <Button variant="secondary" className="adroite" onClick={this.sendData}>
        Quit
        </Button>
        </>
      );
  }
    
  }
 export default Create; 
 