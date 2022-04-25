import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import DatePicker from "react-datepicker";
import axios from "axios";
import moment from "moment";



const FormExampleForm = () => {
    const [title,setTitle] = useState()
    const [date, setDate] = useState(new Date())

    //console.log(title)
    //console.log(date)
    
    const sendDataToAPI = ()=>{
        console.log(title)
        console.log(date)
        const j = date.getDate()
        console.log(j)
        const m = date.getMonth()+1
        console.log(m)
        const a = date.getFullYear()
        console.log(a)
        const laDate =((j<10)?("0"+j):j)+"-"+((m<10)?("0"+m):m)+"-"+a
        const TITLE = `"${title}"`
        const DATE = `"${laDate}"`
        console.log(TITLE)
        console.log(DATE)
        const data = {"title": title, "date": laDate }
        console.log(data)
        const vacancy ={
            "title": title,
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
    }

    return (
        <>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicText">
      <Form.Label>Title</Form.Label>
      <Form.Control name="title" onChange={(e)=>setTitle(e.target.value)}  type="text" placeholder="Enter title" />
      <Form.Text className="text-muted">
      This is a vacancy title
      </Form.Text>
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicText">
      <Form.Label>Date</Form.Label>
      <Form.Text name="date" onChange={(e)=>setDate(e.target.value)} className="text-muted" >
        <DatePicker 
        selected={date} 
        onChange={date => setDate(date)} 
        />
    </Form.Text>
      
    </Form.Group>
  </Form>
    <Button variant="primary" onClick={sendDataToAPI}>
    Submit
    </Button>
    </>
    );
}


export default FormExampleForm