import React, { Component } from "react";
import Create from "../../Pages/Vacancies/Create";
import './Modal.css'
import "../../Pages/Vacancies/Create.css";
export default class Modal extends Component{
    constructor(props){
        super(props)
        this.state={}
        console.log("const_Modal")
        console.log(props.miseajour)
        console.log("const_Modal")
    }
    
    miseajour = (X)=>{
        this.props.miseajour(X)
    }
    rubrique = (x)=>{
        if (x==1) {
            return(<Create hide={this.props.hide} miseajour={this.props.miseajour}/> )
            
        } else {
            return(<div> Bonjour </div>)
        }
    }
    render(){
        console.log("mod")
        console.log(this.props.miseajour)
        console.log("ale")
        return(
            <div className="Modal"
            style={{
                transform: this.props.visible ? 'translateY(0vh)':'translateY(-100vh)',
                opacity: this.props.visible ? '1':'0'
            }}
            >
                
                { this.rubrique(this.props.switch) }
                
               
                
            </div>
        )
    }
    
}