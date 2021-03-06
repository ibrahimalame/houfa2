import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";


export default class Vacancy extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
        // Cette liaison est nécéssaire afin de permettre
        // l'utilisation de `this` dans la fonction de rappel.
        this.handleClick = this.handleClick.bind(this);
      }
    
    handleClick(e) {
        e.preventDefault();
        console.log('Le lien a été cliqué.');
      }
  render() {
    return (
       
        <tr>
            <td><Form><Form.Check 
                type='checkbox'
                id={''}
                label={''}/>
                </Form>
            </td>
        <td> {this.props.id} </td>
        <td> {this.props.title} </td>
        <td> {this.props.time} </td>
        <td>
            <Link to={{ 
                pathname: `/user/${this.props.id}`,
                state: { id: this.props.id }
                }}><Button variant="primary"> View </Button>
            </Link>              
        </td>
        <td></td>
        </tr>
    );
  }
}

